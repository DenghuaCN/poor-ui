/// <reference types="vitest" />

import * as path from 'path';

import { defineConfig } from 'vite';
import { md } from "./plugins/md";
import { demo } from "./plugins/demo";
import vue from '@vitejs/plugin-vue';


export default defineConfig({
  base: './',
  build: {
    assetsDir: 'assets',
  },
  plugins: [vue(), demo(), md()],
  resolve: {
    alias: {
      'poor-ui': path.resolve('./src/lib'),
      '@poor': path.resolve('./src/lib'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      'lib/__tests__/utils',
    ],
    coverage: {
      reporter: ['clover', 'html'],
    },
  }
});
