import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  define: {
    'import.meta.env.VITE_WALLETCONNECT_PROJECT_ID': JSON.stringify(process.env.WALLETCONNECT_PROJECT_ID),
  },
})
