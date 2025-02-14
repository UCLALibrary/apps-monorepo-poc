import { addComponent, defineNuxtModule, createResolver, useLogger } from '@nuxt/kit'
import * as VueComponentLibrary from "vue-component-library"
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@apps-monorepo-poc/nuxt-module',
    configKey: 'vueComponentLibrary',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const logger = useLogger("@apps-monorepo-poc/nuxt-module")
    // const resolver = createResolver(import.meta.url)
    _nuxt.options.css.push("vue-component-library/style.css")
    Object.keys(VueComponentLibrary)
      .forEach((component) => {
        console.log(component)
        addComponent({
          filePath: "vue-component-library",
          name: component,
          export: component,
        })
      })
  },
})
