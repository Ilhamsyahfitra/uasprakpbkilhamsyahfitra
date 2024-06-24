import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: 'src/styles/quasar-variables.sass'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'quasar': path.resolve(__dirname, './node_modules/quasar')
    }
  }
});
