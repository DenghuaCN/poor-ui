import esbuild from 'rollup-plugin-esbuild'
import vue from '@vitejs/plugin-vue'
import scss from 'rollup-plugin-scss'
import { terser } from "rollup-plugin-terser"

import dartSass from 'sass';

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'PoorUI',
    file: 'dist/lib/poor-ui.js',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'PoorUI',
    file: 'dist/lib/poor-ui.esm.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
    vue({
      include: /\.vue$/,
      target: "browser"
    })
  ],
}
