import path from 'node:path';
import { app } from 'electron';

import { envMode } from './constant';

export const isDev = import.meta.env.MODE === envMode.DEVELOPMENT;

const rootDir = isDev
  ? app.getAppPath()
  : app.getAppPath().replace('app.asar', 'app.asar.unpacked');

const prodDir = `${rootDir}/dist`;

export const preloadDir = path.join(prodDir, 'preload');
export const rendererDir = path.join(prodDir, 'renderer');
export const rendererUrl = process.env?.ELECTRON_RENDERER_URL ?? '';
