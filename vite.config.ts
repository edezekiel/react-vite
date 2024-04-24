/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import * as packageJson from './package.json';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/components'],
      exclude: ['src/components/**.spec.tsx']
    }),
  ],
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'ReactComponents',
      formats: ['es', 'umd'],
      fileName: (format) => `react-components.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
