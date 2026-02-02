import { defineConfig } from 'vite'

export default defineConfig({
  base: '/black-death-game/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild'
  }
})
