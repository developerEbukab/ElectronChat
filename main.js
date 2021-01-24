const { BrowserWindow, app } = require("electron")

const CreateWindow = () => {
  const win = new BrowserWindow({
    width: 8000,
    height: 6000,
    backgroundColor: "#fff",
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile("index.html");
  win.webContents.openDevTools()
}

app.whenReady().then(CreateWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
})

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    CreateWindow()
  }
})