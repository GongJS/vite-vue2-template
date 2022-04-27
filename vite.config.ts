import { createVuePlugin as vue } from "vite-plugin-vue2";
import { defineConfig, type UserConfig, splitVendorChunkPlugin } from "vite";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
const config: UserConfig = {
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["acorn", "acorn-jsx", "vue-live"])],
    },
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm.browser",
    },
  },
  plugins: [
    // Vue2
    // https://github.com/underfin/vite-plugin-vue2
    vue({
      target: "esnext",
    }),
    splitVendorChunkPlugin(),
  ],
  // Build Options
  // https://vitejs.dev/config/#build-options
};

// Export vite config
export default defineConfig(async ({ command }): Promise<UserConfig> => {
  // Hook production build.
  // if (command === 'build') {
  // Write meta data.
  // }

  return config;
});
