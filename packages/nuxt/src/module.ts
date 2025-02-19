import { addComponent, defineNuxtModule, useLogger } from '@nuxt/kit'
import * as VueComponentLibrary from '@apps-monorepo-poc/vue-component-library'
// Module options TypeScript interface definition
export interface ModuleOptions {
  [key: string]: unknown
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@apps-monorepo-poc/nuxt-module',
    configKey: 'vueComponentLibrary',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const logger = useLogger('@apps-monorepo-poc/nuxt-module')

    _nuxt.options.css.push('@apps-monorepo-poc/vue-component-library/style.css')
    Object.keys(VueComponentLibrary)
      .forEach((component) => {
        logger.info(`Adding component: ${component}`)
        addComponent({
          filePath: '@apps-monorepo-poc/vue-component-library',
          name: component,
          export: component,
        })
      })
  },
})
