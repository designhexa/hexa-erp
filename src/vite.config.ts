import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      build: {
        outDir: 'dist', // Ensure this matches your expected output directory
      },
      server: {
        // Add fallback for single-page apps (adjust based on your index.html location)
        fallback: './index.html',
      },
    });