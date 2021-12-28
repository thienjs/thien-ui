const borderWidth = require('./borderWidth');
const boxShadow = require('./boxShadow');
const colors = require('./colors');
const fontFamily = require('./fontFamily');
const minHeight = require('./minHeight');
const spacing = require('./spacing');
const translate = require('./translate');
const animation = require('./animation');
const keyframes = require('./keyframes');

module.exports = {
   mode: 'jit',
   purge: [
      './src/**/*.{ts,tsx}',
      './src/css/tackle.css',
      './src/css/helpers/*.css',
      './stories/*.js',
   ],
   theme: {
      extend: {
         minHeight,
         borderWidth,
         boxShadow,
         colors,
         fontFamily,
         spacing,
         translate,
         animation,
         keyframes,
      },
   },
}
