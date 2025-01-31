import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/joaogneves.github.io/',
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});
