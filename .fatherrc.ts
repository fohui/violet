export default {
  esm: 'rollup',
  cjs: 'rollup',
  autoprefixer: {
    flexbox: ['ie>9', 'Safari >= 6'],
  },
  cssModules: true,
  injectCSS: true,
  sassInRollupMode: {
    file: "./src"
  }
};
