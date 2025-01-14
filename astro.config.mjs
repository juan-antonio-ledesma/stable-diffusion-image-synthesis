// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never',
  integrations: [react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    resolve: {
      alias: {
        '@layouts': '/src/layouts',
        '@components': '/src/components',
        '@icons': '/src/icons',
        '@styles': '/src/styles',
        '@utils': '/src/utils',
        '@data': '/src/data',
        '@views': '/src/views',
      },
    },
  },
})
