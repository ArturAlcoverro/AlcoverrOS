import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import biomePlugin from 'vite-plugin-biome'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [svgr(), react(), tailwindcss(), tsconfigPaths(), biomePlugin()]
})
