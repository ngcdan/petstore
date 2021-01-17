import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

import pkg from './package.json'

const commonjsArgs = {
  include: 'node_modules/**',
  // needed for react-is via react-redux
  // https://stackoverflow.com/questions/50080893/rollup-error-isvalidelementtype-is-not-exported-by-node-modules-react-is-inde/50098540
  namedExports: {
    'node_modules/react-is/index.js': [ 'isValidElementType', 'isContextConsumer', ],
  },
};

// Treat as externals all not relative and not absolute paths
// e.g. 'react'
const excludeAllExternals = (id) => !id.startsWith('.') && !id.startsWith('/');

export default {
  input: 'src/index.tsx',
  output: [
    /*
    { 
      file: pkg.main, format: 'cjs', exports: 'named', sourcemap: false, 
      globals: { react: 'React', 'react-dom': 'ReactDOM' }
    },
    */
    { 
      file: pkg.module, format: 'es', exports: 'named', sourcemap: false, 
      globals: { react: 'React', 'react-dom': 'ReactDOM' }
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    postcss({ modules: false }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      clean: true
    }),
    commonjs(commonjsArgs),
    external({ 
      //'react': 'commonjs react', 
      //'react-dom': 'commonjs react-dom'
      'react': 'react', 
      'react-dom': 'react-dom'
    }),
  ],
}
