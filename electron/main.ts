import {BrowserWindow, app} from "electron"
import {join} from "path"

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: join(__dirname, "preload.js") 
        }
    })
    window.maximize()
    window.loadFile(join(__dirname, "../index.html") )
    window.webContents.openDevTools()
}

app.whenReady()
   .then(() => {
        app.on("activate", () => BrowserWindow.getAllWindows().length === 0 && createWindow())
        app.on("window-all-closed", () => process.platform !== "darwin" && app.quit())
        createWindow()
   })