import { addComponent, defineNuxtModule, useLogger } from '@nuxt/kit'
import type { ModuleOptions } from '@nuxt/schema'
import * as VueComponentLibrary from '@apps-monorepo-poc/vue-component-library'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@apps-monorepo-poc/nuxt-module',
    configKey: 'vueComponentLibrary',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, _nuxt) {
    const logger = useLogger('@apps-monorepo-poc/nuxt-module')
   /* if (Array.isArray(_nuxt.options.vite.ssr?.noExternal)) {
      _nuxt.options.vite.ssr.noExternal.push('@apps-monorepo-poc/vue-component-library')
    }*/

   _nuxt.options.build.transpile.push('@apps-monorepo-poc/vue-component-library')

    Object.keys(VueComponentLibrary)
      .forEach((component) => {
        logger.info(`Adding component: ${component}`)
        // if (component === 'default') return
        addComponent({
          filePath: '@apps-monorepo-poc/vue-component-library',
          name: component,
          export: component,
        })
      })
  },
})
