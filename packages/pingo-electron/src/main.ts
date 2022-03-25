import { app, BrowserWindow } from 'electron';

app.whenReady().then(() => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		title: 'FTPIngo - The coolest FTP client'
	});
	
	win.loadFile('./dist-web/index.html');
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});