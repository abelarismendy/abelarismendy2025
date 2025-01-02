import react from '@vitejs/plugin-react-swc'
import { tamaguiPlugin, tamaguiExtractPlugin } from '@tamagui/vite-plugin'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      // points to your tamagui config file
      config: 'src/tamagui.config.ts',
      // points to any linked packages or node_modules
      // that have tamagui components to optimize
      components: ['tamagui'],
      // turns on the optimizing compiler
      optimize: true,
    }),
    tamaguiExtractPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets')
    },
  },
}) 
