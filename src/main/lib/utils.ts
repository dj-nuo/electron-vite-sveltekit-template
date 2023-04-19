import { app, ipcMain, BrowserWindow } from 'electron';
import { sleep } from '../../shared/sharedUtils';
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

ipcMain.on('homeDirPathAsync', async (event, arg) => {
	console.log(event.isTrusted);
	console.log(arg);
	const response = os.homedir();

	const mainWindow = BrowserWindow.getAllWindows()[0];

	// testing shared utils
	await sleep(2000);
	//

	mainWindow.webContents.send('homeDirPathAsyncResponse', response);
});
