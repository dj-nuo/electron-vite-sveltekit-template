import { app, ipcMain, BrowserWindow } from 'electron';
import os from 'os';

ipcMain.on('appVersionSync', (event, arg) => {
	console.log(arg);
	let currentVersion = '';

	if (process.env.NODE_ENV === 'development') {
		currentVersion = process.env.npm_package_version || '';
	} else {
		currentVersion = app.getVersion();
	}
	event.returnValue = currentVersion;
});

ipcMain.on('homeDirPathAsync', (event, arg) => {
	console.log(event.isTrusted);
	console.log(arg);
	const response = os.homedir();

	const mainWindow = BrowserWindow.getAllWindows()[0];
	mainWindow.webContents.send('homeDirPathAsyncResponse', response);
});
