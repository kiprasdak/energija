const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      symlinks: false,
      alias: {
        vue$: path.resolve("./node_modules/vue/dist/vue.esm-bundler.js"),
      },
    },
    externals: {
      "element-ui": {
        commonjs: "element-ui",
        commonjs2: "element-ui",
        root: "ELEMENT",
        amd: "element-ui",
      },
      vue: {
        commonjs: "vue",
        commonjs2: "vue",
        root: "Vue",
        amd: "vue",
      },
      axios: {
        commonjs: "axios",
        commonjs2: "axios",
        root: "axios",
        amd: "axios",
      },
      dayjs: {
        commonjs: "dayjs",
        commonjs2: "dayjs",
        root: "dayjs",
        amd: "dayjs",
      },
    },
    plugins: [new NodePolyfillPlugin()],
  },
};
