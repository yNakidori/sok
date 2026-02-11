const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const os = require("os");
const path = require("path");

function getArgValue(prefix) {
  const arg = process.argv.find((value) => value.startsWith(prefix));
  if (!arg) return undefined;
  const value = arg.slice(prefix.length);
  return value.length ? value : undefined;
}

// Workaround for occasional Windows permission issues writing Chromium caches.
// Put caches under %TEMP% (writable) instead of default locations.
try {
  const cacheRoot = path.join(os.tmpdir(), "sok-electron-cache");
  fs.mkdirSync(cacheRoot, { recursive: true });
  app.commandLine.appendSwitch("disk-cache-dir", cacheRoot);
  app.commandLine.appendSwitch("gpu-shader-disk-cache-dir", cacheRoot);
  app.commandLine.appendSwitch("disable-gpu-shader-disk-cache");
} catch {
  // If this fails, Electron will fall back to defaults.
}

function resolveIndexHtmlPath() {
  // When running unpackaged (dev), this points at the project root.
  // When packaged, app.getAppPath() points inside the asar.
  return path.join(app.getAppPath(), "dist", "index.html");
}

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.cjs"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const devServerUrl =
    process.env.VITE_DEV_SERVER_URL ??
    getArgValue("--dev-server-url=") ??
    getArgValue("--devServerUrl=");
  const indexHtmlPath = resolveIndexHtmlPath();

  if (devServerUrl) {
    win.loadURL(devServerUrl);
    win.webContents.openDevTools({ mode: "detach" });
    return;
  }

  if (fs.existsSync(indexHtmlPath)) {
    win.loadFile(indexHtmlPath);
    return;
  }

  // Running without dev server and without a build.
  // This avoids a confusing ERR_CONNECTION_REFUSED when Vite isn't running.
  win.loadURL(
    "data:text/plain," +
      encodeURIComponent(
        "Nothing to load yet.\n\n" +
          "Dev:   npm run start\n" +
          "Build: npm run electron:preview\n",
      ),
  );
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
