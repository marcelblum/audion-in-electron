// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
	/* webPreferences: {
	  //webSecurity: false,
	  //allowRunningInsecureContent: true,
	  //sandbox: true,
	  nodeIntegrationInWorker: true,
	  nodeIntegration: true,
	  contextIsolation: false
	} */
    width: 800,
    height: 600
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools({ mode: 'detach' });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {	
	const {default: installExtension} = require('electron-devtools-installer');
	installExtension("cmhomipkklckpomafalojobppmmidlgl").then((name) => console.log(`Added Extension:  ${name}`)).catch((err) => console.log('An error occurred: ', err));
	createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  app.quit();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
