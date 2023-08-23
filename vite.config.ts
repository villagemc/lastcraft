import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: "> 0%"
        })
      ],
    }
  },
  resolve: {
    alias: {
      '@components': '/src/components',
      '@images': '/src/images',
      '@styles': '/src/styles',
      '@store': '/src/store',
      '@effects': '/src/effects'
    }
  }
})
