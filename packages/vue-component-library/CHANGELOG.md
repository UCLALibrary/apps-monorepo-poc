# @apps-monorepo-poc/vue-component-library-v1.0.0 (2025-02-19)


### Bug Fixes

* plugin structure in release config ([#27](https://github.com/UCLALibrary/apps-monorepo-poc/issues/27)) ([659a0e0](https://github.com/UCLALibrary/apps-monorepo-poc/commit/659a0e0712708e38cbdff6957cd0f9b77f6d7859))


### Features

* add catalog for packages, add pnpm -r -filter scripts at root add remaining compoents and utils, add node_modules to scss svg url comented code to enable individual components to be be bundled as modules in the output ([d70c849](https://github.com/UCLALibrary/apps-monorepo-poc/commit/d70c8490bf9e99c2bdde8c127854b8ab2e9a45fa))
* Add component library and some components from ucla component library, utils, types, composable, update vite.config.js, add shim.d.ts for typescript errors for vue imports, add path and allowjs to tsconfig.app.json to allow imports of typescript and other js files in sfc files ([150e608](https://github.com/UCLALibrary/apps-monorepo-poc/commit/150e608e6feba8f1999d970238bf759f7f960244))
* add components to trigger release ([#19](https://github.com/UCLALibrary/apps-monorepo-poc/issues/19)) ([6636022](https://github.com/UCLALibrary/apps-monorepo-poc/commit/6636022b9558b28e35f65a6dd984207008da2187))
* add github actions, publishing tokens and eslint and ci ([00192aa](https://github.com/UCLALibrary/apps-monorepo-poc/commit/00192aae80e50a02e60a29ea68d9c1ae43603a46))
* add new component ([#23](https://github.com/UCLALibrary/apps-monorepo-poc/issues/23)) ([2667473](https://github.com/UCLALibrary/apps-monorepo-poc/commit/26674734b2a2010023c10b12f5816af7a73969f6))
* Add new component to test publishing workflow changes ([#26](https://github.com/UCLALibrary/apps-monorepo-poc/issues/26)) ([8a0d16b](https://github.com/UCLALibrary/apps-monorepo-poc/commit/8a0d16b8b4e1c38d51b1ff43747cb103f9c490eb))
* add publish config to make the package public ([#22](https://github.com/UCLALibrary/apps-monorepo-poc/issues/22)) ([fdd20e7](https://github.com/UCLALibrary/apps-monorepo-poc/commit/fdd20e78f07034c9856d2f7ea090a9dbad08f19d))
* APPS-3133_part22 ([#24](https://github.com/UCLALibrary/apps-monorepo-poc/issues/24)) ([efcefe9](https://github.com/UCLALibrary/apps-monorepo-poc/commit/efcefe97b1a3a4c9c02ed49ed1c018559c0321d3))
* convert it into a library ([9af4696](https://github.com/UCLALibrary/apps-monorepo-poc/commit/9af469670d17e111d763d89df28ff8a8a71fc68b))
* convert it into a library ([747e88c](https://github.com/UCLALibrary/apps-monorepo-poc/commit/747e88c70a9b2d1a31ce684450b39111eb5621c2))
* create nuxt module to enable autoimports ([338f3a2](https://github.com/UCLALibrary/apps-monorepo-poc/commit/338f3a2093612d2a645e11989f7485603863efcb))
* export types ([43f3823](https://github.com/UCLALibrary/apps-monorepo-poc/commit/43f3823f5a4ff41f25aa4e9db91d112b5b1a1ac2))
* fix eslint errors ([65f7cac](https://github.com/UCLALibrary/apps-monorepo-poc/commit/65f7cac350a1474ca950e2f82a81ba8244e27dd2))
* rename component library package ([#21](https://github.com/UCLALibrary/apps-monorepo-poc/issues/21)) ([89ccd42](https://github.com/UCLALibrary/apps-monorepo-poc/commit/89ccd425889743eab9c2573d645d0e44e376b338))
* update npm publish action and add a new component ([#20](https://github.com/UCLALibrary/apps-monorepo-poc/issues/20)) ([c7258a3](https://github.com/UCLALibrary/apps-monorepo-poc/commit/c7258a3dbc927db1eed21114b8e621e96fbfe339))
* update release code ([#15](https://github.com/UCLALibrary/apps-monorepo-poc/issues/15)) ([7cbb047](https://github.com/UCLALibrary/apps-monorepo-poc/commit/7cbb04776d6e55d0d49bf5646c3402e821767e12))

# [1.4.0](https://github.com/UCLALibrary/apps-monorepo-poc/compare/v1.3.0...v1.4.0) (2025-02-15)


### Features

* add new component ([#23](https://github.com/UCLALibrary/apps-monorepo-poc/issues/23)) ([2667473](https://github.com/UCLALibrary/apps-monorepo-poc/commit/26674734b2a2010023c10b12f5816af7a73969f6))

# [1.3.0](https://github.com/UCLALibrary/apps-monorepo-poc/compare/v1.2.0...v1.3.0) (2025-02-15)


### Features

* add publish config to make the package public ([#22](https://github.com/UCLALibrary/apps-monorepo-poc/issues/22)) ([fdd20e7](https://github.com/UCLALibrary/apps-monorepo-poc/commit/fdd20e78f07034c9856d2f7ea090a9dbad08f19d))

# [1.2.0](https://github.com/UCLALibrary/apps-monorepo-poc/compare/v1.1.0...v1.2.0) (2025-02-15)


### Features

* rename component library package ([#21](https://github.com/UCLALibrary/apps-monorepo-poc/issues/21)) ([89ccd42](https://github.com/UCLALibrary/apps-monorepo-poc/commit/89ccd425889743eab9c2573d645d0e44e376b338))

# [1.1.0](https://github.com/UCLALibrary/apps-monorepo-poc/compare/v1.0.0...v1.1.0) (2025-02-15)


### Features

* add components to trigger release ([#19](https://github.com/UCLALibrary/apps-monorepo-poc/issues/19)) ([6636022](https://github.com/UCLALibrary/apps-monorepo-poc/commit/6636022b9558b28e35f65a6dd984207008da2187))
* do not release the monorepo but the packages only ([#18](https://github.com/UCLALibrary/apps-monorepo-poc/issues/18)) ([aba53ca](https://github.com/UCLALibrary/apps-monorepo-poc/commit/aba53ca02df1621d5bfb784faf40b3d8d03fc50e))
* update npm publish action and add a new component ([#20](https://github.com/UCLALibrary/apps-monorepo-poc/issues/20)) ([c7258a3](https://github.com/UCLALibrary/apps-monorepo-poc/commit/c7258a3dbc927db1eed21114b8e621e96fbfe339))
