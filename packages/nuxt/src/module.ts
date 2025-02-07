import { addComponent, defineNuxtModule, createResolver, useLogger } from '@nuxt/kit'
import * as VueComponentLibrary from "vue-component-library"
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@stellar/nuxt',
    configKey: 'stellar',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const logger = useLogger("@stellar/nuxt")
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
