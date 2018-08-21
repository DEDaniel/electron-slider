const {app, BrowserWindow} = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        resizable: false,
        frame: false,
        transparent: true
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('quit', () => {
    app.quit();
});