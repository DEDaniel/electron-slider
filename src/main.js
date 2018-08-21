const {app, BrowserWindow} = require('electron');
const path = require('path');
let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 500,
        height: 500
    });

    mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

});

app.on('quit', () => {
    app.quit();
});