import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/betting-software/',
  plugins: [react(), svgr(
    {
      svgrOptions: {
        icon: true,
      },
      include: "**/*.svg?react",
    }
  )],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@styles': path.resolve(__dirname, 'src/assets/scss'),
      '@customTypes': path.resolve(__dirname, 'src/types'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@hooks': path.resolve(__dirname, 'src/hooks')
    }
  }
})
