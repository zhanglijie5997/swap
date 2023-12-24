import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImportPlugin from "vite-import-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteImportPlugin({
      onlyBuild: false,
      babelImportPluginOptions: [
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        },
      ],
    }),
    react(),
  ],
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
          safari10: true, // 解决 Safari 10/11 循环范围和await. 见safari10在选择mangle 和format了解详细信息。
      }
  },

})
