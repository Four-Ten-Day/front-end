import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [react(), eslint(), svgr()],
});
