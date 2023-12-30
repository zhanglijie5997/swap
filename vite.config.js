import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImportPlugin from "vite-import-plugin";
import tailwindcss from  'tailwindcss'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: './',
  build: {
      
      assetsInlineLimit: 10240,
      manifest: true, // 构建后将会生成 manifest.json 文件，映射没有被 hash 的资源文件名和它们的 hash 版本。可以为一些服务器框架渲染时提供正确的资源引入链接。
      rollupOptions: {
          // external: ['react'],
          // output: {
          //     globals: {
          //         React: 'react'
          //     }
          // }
      },
      terserOptions: {
          compress: {
            drop_console: false,
            drop_debugger: false
          },
          safari10: true, // 解决 Safari 10/11 循环范围和await. 见safari10在选择mangle 和format了解详细信息。
      },
      
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://68.178.171.224:8601/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, autoprefixer
      ]
    }
  },
  

})
