import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
export default defineConfig({
  build: {
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      // input: ['index.ts'],
      output: {
        globals: {
          vue: 'Vue'
        },
        dir: 'dist'
      }
    },
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: [ 'es' ]
    },
  },
  plugins: [ vue(), dts() ]
})
// { rollupTypes: true }
