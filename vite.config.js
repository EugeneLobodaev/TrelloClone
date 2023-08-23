import { defineConfig } from 'vite'
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
  root: './public',
  hot: true,
  base: '/',

  css: {
    preprocessor: 'scss',
  },

  plugins: [htmlMinifier()],

  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
