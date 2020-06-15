const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (env) => {
  const { parsed } = dotenv.config({
    path: path.resolve(__dirname, `.env.${env}`),
  });

  const envKeys = Object.keys(parsed).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(parsed[next]);
    return prev;
  }, {});

  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] },
        },
      ],
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js",
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true,
      historyApiFallback: true,
    },
    node: {
      fs: "empty",
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
