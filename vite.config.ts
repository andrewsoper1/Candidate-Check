import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './environment',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 3001,
    host: '0.0.0.0',
  }
});
console.log('Attempting to start on port:', process.env.PORT || 3001);