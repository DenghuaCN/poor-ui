
import * as path from 'path';

import { md } from "./plugins/md";
import { demo } from "./plugins/demo";
import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  assetsDir: 'assets',
  plugins: [vue(), demo(), md()],
  resolve: {
    alias: {
      'poor-ui': path.resolve('./src/lib'),
      '@poor': path.resolve('./src/lib'),
    },
  },
};
