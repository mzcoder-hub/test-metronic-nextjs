/** @type {import('postcss-load-config').Config} */

export const plugins = {
  'postcss-preset-env': {},
  'postcss-import': {},
  'tailwindcss/nesting': 'postcss-nesting',
  'postcss-preset-env': {
    'features': { 
      'nesting-rules': false
    }
  },
  'tailwindcss': {},
  'autoprefixer': {},
};

const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;

