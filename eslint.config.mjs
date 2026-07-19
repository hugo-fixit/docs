import antfu from '@antfu/eslint-config'

export default antfu({
  markdown: false,
  ignores: [
    '.frontmatter',
    '*/**/caches/**',
    '*/**/data/chart.*',
  ],
})
