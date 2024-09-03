import { join, resolve } from 'node:path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'

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
  plugins: [
    react(),
    // dts({ rollupTypes: true }), // Output .d.ts files
  ],
})

// import { resolve } from 'path'

// import react from '@vitejs/plugin-react-swc'
// import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'

// import { dependencies, devDependencies } from './package.json'
// export default defineConfig({
//   build: {
//     lib: {
//       entry: resolve(__dirname, 'src/index.ts'),
//       fileName: 'index',
//       name: 'uikit-inctagram',
//     },
//     rollupOptions: {
//       external: [
//         ...Object.keys(dependencies),
//         ...Object.keys(devDependencies),
//         'react/jsx-runtime',
//       ],
//       output: {
//         dir: 'dist',
//         entryFileNames: '[name].js',
//         format: 'es',
//         globals: {
//           react: 'React',
//         },
//       },
//     },
//   },
//   plugins: [react(), dts({ rollupTypes: true })],
// })
