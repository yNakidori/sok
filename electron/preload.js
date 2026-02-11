const { contextBridge } = require("electron");

constBridge.exposeInMainWorld("electron", {
  ping: () => "pong",
});
