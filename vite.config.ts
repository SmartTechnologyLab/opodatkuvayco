import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'
import VueDevtools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    VueDevtools(),
    eslint({
      emitWarning: true,
      exclude: [/virtual:/, /node_modules/, /sb-preview/]
    }),
    checker({ typescript: true })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/scss/resources/index.scss';`
      }
    }
  }
})
