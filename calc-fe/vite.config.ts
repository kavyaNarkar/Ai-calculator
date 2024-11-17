
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path/posix'

// https://vite.dev/config/


export default defineConfig({
  plugins: [react()],
  resolve: {
  alias: {
    "@": path.resolve(__dirname,"/src"),
  },
},
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': '/src'
//     }
//   }
// });
