import { defineNuxtConfig } from 'nuxt'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const path = require('path')
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'public/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
  },
})
