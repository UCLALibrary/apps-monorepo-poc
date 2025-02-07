import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import packageJson from "./package.json"
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import postcssBase64 from 'postcss-base64'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader({ svgo: false })],
  build: {
    lib: {
      entry: getFilePath("./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
      cssFileName: "style",
      
    },
    rollupOptions: {
      // The following comented code for generating separate components output instead of one lib file like above can be enabled but needs further improvement 
      // This configuration tells Rollup to treat each component file as a separate entry point. The resulting output will place each built component into the dist/components directory as a standalone module.
      /*input: {
        ButtonLink: resolve(__dirname, 'src/lib-components/ButtonLink.vue'),
        SmartLink: resolve(__dirname, 'src/lib-components/SmartLink.vue')
      },
      output: {
        format: 'es', // Typically, ES modules are a good choice for components
        dir: 'dist/components',
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      },*/
      // make sure to externalize dependencies that shouldn't be bundled into the library
      external: Object.keys(packageJson.peerDependencies),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssBase64({
          extensions: ['.svg'],
        }),
      ],
    },
    preprocessorOptions: {
      // Additional Sass options go here
      scss: {
        additionalData: `
                  @import "ucla-library-design-tokens/scss/fonts.scss";
                  @import "ucla-library-design-tokens/scss/_tokens-ftva";
                  @import "ucla-library-design-tokens/scss/app.scss";
                `,
      },
    },
  },
  resolve: {
    alias: {
      '@': getFilePath('./src'),
      'ucla-library-design-tokens': resolve(__dirname, 'node_modules/ucla-library-design-tokens'),
    },
    extensions: ['.mjs', '.mts', '.ts', '.jsx', '.tsx', '.vue', '.js', '.json'],
  },
})

/** Gets the given path while ensuring cross-platform and correct decoding */
function getFilePath(path: string) {
  console.log("getFilePath",resolve(__dirname, path))
  return resolve(__dirname, path)
}