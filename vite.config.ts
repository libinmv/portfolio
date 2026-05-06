import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cloudflare()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 5173,
    host: true,
    allowedHosts: ['portfolio.libinmv.in', 'localhost'],
  },
})