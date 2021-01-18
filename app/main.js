const { app, BrowserWindow } = require('electron')

const appLock = app.requestSingleInstanceLock()
let win = null
function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 400,
        minWidth: 800,
        minHeight: 400,
        maxWidth: 800,
        maxHeight: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

if (!appLock) {
    app.quit()
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (win) {
            if (win.isMinimized()) win.restore()
            win.focus()
        }
    })

    app.whenReady().then(createWindow)

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
}
