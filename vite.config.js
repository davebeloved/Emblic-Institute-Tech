// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://spms.telexcoresources.com.ng",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
