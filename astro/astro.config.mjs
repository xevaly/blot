import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel/serverless'
import prefresh from '@prefresh/vite'
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'

// https://astro.build/config
export default defineConfig({
  site: 'https://editor.haxidraw.hackclub.com',
  integrations: [
    preact({
      compat: true
    }),
    mdx()
  ],
  output: 'server',
  adapter: vercel(),
  markdown: {
    shikiConfig: { theme: 'github-light' },
    remarkPlugins: [remarkToc]
  },
  vite: {
    plugins: [prefresh()],
    ssr: {
      noExternal: ['niue']
    },
    esbuild: {
      target: 'es2020'
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020'
      }
    },
    build: {
      target: 'es2020'
    }
  },
  markdown: {
    syntaxHighlight: 'prism'
  },
  integrations: [preact(), mdx()]
})
