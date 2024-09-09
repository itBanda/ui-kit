import { join, resolve } from 'node:path'

import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, join('src', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'cjs'],
      name: 'ui-kit',
    },
    minify: false,
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        exports: 'named',
        format: 'cjs',
      },
    },
    target: 'esnext',
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [react(), svgr()],
})
