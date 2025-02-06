// create this file to fix 
/**
 * vite.config.ts:6:27 - error TS7016: Could not find a declaration file for module 'postcss-base64'. '/Users/parinitamulak/stellar/node_modules/.pnpm/postcss-base64@0.7.1/node_modules/postcss-base64/index.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/postcss-base64` if it exists or add a new declaration (.d.ts) file containing `declare module 'postcss-base64';`

6 import postcssBase64 from 'postcss-base64'
                            ~~~~~~~~~~~~~~~~
 */
declare module 'postcss-base64' {
  export default function(options: { extensions: string[] }): any;
}