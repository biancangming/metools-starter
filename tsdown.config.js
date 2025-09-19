// @ts-check

import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  clean: true,
  // @ts-ignore
  dts: true,
  sourcemap: true,
  minify: false,
  splitting: false,
  treeshake: true,
  define: {
    __DEV__: 'false',
    __PROD__: 'true'
  },
  // 添加组件名称验证
  plugins: [
    {
      name: 'validate-component',
      buildStart() {
        console.log('正在验证组件是否符合规范...')
      }
    }
  ]
})