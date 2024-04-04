import path from 'node:path';
import { app, BrowserWindow } from 'electron';

import { isDev, preloadDir, rendererDir, rendererUrl } from '@lib/utils';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(preloadDir, 'index.js'),
    },
  });

  if (isDev) {
    // dev mode will not build the renderer
    // so use url instead
    win.loadURL(rendererUrl);
  } else {
    win.loadFile(path.join(rendererDir, 'index.html'));
  }
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
