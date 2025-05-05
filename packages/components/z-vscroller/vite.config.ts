import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'ZVScroller',
      fileName: `z-vscroller`,
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
