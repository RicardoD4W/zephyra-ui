import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'ZIcon',
      fileName: `z-icon`,
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
