const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const { parsed } = dotenv.config({
    path: path.resolve(__dirname, `.env.${env}`),
  });

  const envKeys = Object.keys(parsed).reduce((prev, next) => {
    console.log("ENV", process.env);
    const value = !!parsed[next]
      ? JSON.stringify(parsed[next])
      : process.env[next];

    prev[`process.env.${next}`] = value;
    return prev;
  }, {});

  console.log("envKeys", envKeys);
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
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.js",
      chunkFilename: "[name].bundle.js",
      publicPath: "/",
      filename: "bundle.js",
    },
    devServer: {
      contentBase: path.join(__dirname, "./dist"),
      port: 3000,
      publicPath: "http://localhost:3000/",
      hotOnly: true,
      historyApiFallback: true,
    },
    node: {
      fs: "empty",
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: path.resolve("./public/index.html"),
      }),
    ],
  };
};
