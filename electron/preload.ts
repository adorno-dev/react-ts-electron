import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("preloaded", {
    electron: process.versions.electron
})