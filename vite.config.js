// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // 꼭 이렇게 루트 기준으로 설정
    },
  },
})
