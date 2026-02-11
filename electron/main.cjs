const { app, BrowserWindow } = require("electron");
const fs = require("fs");
const path = require("path");

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

  const devServerUrl = process.env.VITE_DEV_SERVER_URL;
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

  // Fallback for dev when the env var isn't set (and dist isn't built).
  win.loadURL("http://localhost:5173");
  win.webContents.openDevTools({ mode: "detach" });
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
