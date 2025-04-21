import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ZephyraUI',
      fileName: (format) => `zephyra-ui.${format}.js`,
    },
    rollupOptions: {
      external: (id) => /^lit/.test(id),
      output: {
        globals: {
          lit: 'Lit',
        },
      },
    },
  },
});
