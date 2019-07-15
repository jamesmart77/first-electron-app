const { app, BrowserWindow } = require('electron')
const notifier = require('node-notifier');

function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
        nodeIntegration: true
        }
    });
    
    // Object
    notifier.notify(
        {
            title: 'New Notification',
            message: 'Please confirm/deny your reservation at desk 03C-582S for today.',
            timeout: 60, //seconds
            closeLabel: 'Deny',
            actions: 'Confirm'
        }, 
        function(error, response, metadata) {
            console.log(response, metadata);
        });

    // and load the index.html of the app.
    win.loadFile('index.html')
}

app.on('ready', createWindow)