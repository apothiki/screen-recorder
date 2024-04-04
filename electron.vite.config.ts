import path from 'node:path';

import {
  bytecodePlugin,
  defineConfig,
  defineViteConfig,
  externalizeDepsPlugin,
} from 'electron-vite';
import preact from '@preact/preset-vite';

const main = defineViteConfig(({ mode }) => ({
  plugins: [bytecodePlugin(), externalizeDepsPlugin()],
  build: {
    target: 'node20.9.0',
    outDir: 'dist/main',
    minify: mode === 'production',
    reportCompressedSize: mode === 'production',
    lib: {
      entry: 'src/main/index.ts',
      name: 'main',
    },
  },
  resolve: {
    alias: {
      '@main': path.resolve(__dirname, 'src/main'),
      '@lib': path.resolve(__dirname, 'src/lib'),
    },
  },
}));

const preload = defineViteConfig(({ mode }) => ({
  plugins: [externalizeDepsPlugin()],
  build: {
    minify: mode === 'production',
    outDir: 'dist/preload',
    target: 'node20.9.0',
    reportCompressedSize: mode === 'production',
    lib: {
      entry: 'src/preload/index.ts',
      name: 'preload',
    },
  },
}));

const renderer = defineViteConfig(({ mode }) => ({
  plugins: [preact()],
  build: {
    target: 'chrome122',
    outDir: 'dist/renderer',
    minify: mode === 'production',
    reportCompressedSize: mode === 'production',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
    },
  },
}));

export default defineConfig({
  main,
  preload,
  renderer,
});
