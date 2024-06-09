import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mark/',
  plugins: [vue()],
  configureWebpack: {
        resolve: {
            symlinks: true,
            alias: {
                vue: path.resolve(`./node_modules/vue`)
            }
        }
    },
  build: {
    minify: "terser",
    
    rollupOptions: {
      output: {
        manualChunks: {
          highlightjs: ["highlight.js"],
        },
      },
    },
    terserOptions: {
      compress: {
        passes: 10,
      },
    },
  },
});
