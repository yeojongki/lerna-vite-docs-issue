import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginVuedoc, { vueDocFiles } from 'vite-plugin-vuedoc'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vitePluginVuedoc({}), vue({ include: [...vueDocFiles] }), vueJsx()],
})
