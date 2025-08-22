// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: '/',
  publicDir: 'public',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          const ext = name?.split('.').pop();
          if (ext === 'css') return 'assets/css/[name]-[hash][extname]';
          return 'assets/[name]-[hash][extname]';
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/') ||
              id.includes('node_modules/react-is/') ||
              id.includes('node_modules/react-jsx-runtime/')
            ) {
              return 'react-vendor';
            }
            if (
              id.includes('node_modules/tailwindcss/') ||
              id.includes('node_modules/postcss/') ||
              id.includes('node_modules/clsx/')
            ) {
              return 'vendor-style';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});