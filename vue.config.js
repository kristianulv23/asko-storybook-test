module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/asko-storybook/" : "/",
  configureWebpack: {
    entry: {
      app: "./src/index.js",
    },
    module: {
      rules: [
        {
          test: /.mdx?$/,
          use: ["babel-loader", "@mdx-js/vue-loader"],
        },
        {
          test: /\.vue$/,
          use: "vue-docgen-loader",
          enforce: "post",
        },
      ],
    },
  },
};
