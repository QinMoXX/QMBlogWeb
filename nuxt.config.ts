export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  css: [
    'katex/dist/katex.min.css',
  ],
  content: {
    markdown: {
      remarkPlugins: [
        'remark-math',
      ],
      rehypePlugins: {
        'rehype-katex': {
          output: 'html',
        },
      },
    },
  },
  mdc: {
    highlight: {
      langs: ['csharp', 'javascript', 'typescript', 'vue', 'bash', 'python', 'cpp', 'shell', 'c']  
    }
  }
});
