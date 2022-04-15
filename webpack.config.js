const path = require("path");
const webpack = require("webpack");
const MiniExtractTextPlugin = require("mini-css-extract-plugin");


module.exports = (env) => {

  const isProduction = env === "production";
  const devtool = isProduction ? "source-map" : "inline-source-map";
  const devServer = {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    open: true,
    hot: true,
  };
  const plugins = [new MiniExtractTextPlugin({ filename: "styles.css" })]
  
  return {
    // This property defines where the application starts
    entry: "./src/app.js",

    // This property defines the file path and the file name which will be used for deploying the bundled file
    output: {
      path: path.join(__dirname, "public/dist"),
      filename: "bundle.js",
      publicPath:"/dist"
    },
    // mode: isProduction?"production":"development" ,
    mode:"production",

    //Setup loaders
    module: {
      rules: [
        // Babel Loader
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        },
        // CSS & SCSS Loader
        {
          test: /\.s?css$/,
          use: [
              {
              loader:MiniExtractTextPlugin.loader,
                options: {
                  publicPath: path.join(__dirname, "public/dist")
                },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }

            ],
        },
      ],
    },
    plugins,
    devtool,
    devServer
  };
};
