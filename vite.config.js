import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'node:url'

const path = (relativePath) => 
  fileURLToPath(new URL(relativePath, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path('./src/components'),
      '@utils': path('./src/utils'),
      '@absolute': path('./src'),
      '@css': path('./src/styles'),
      '@js': path('./src/js'),
      '@pages': path('./src/pages'),
      '@assets': path('./src/assets'),
      '@html': path('./html'),
      '@data': path('./src/data'),
      '@imgs':path('./src/assets/imgs')
    },
  },
})
