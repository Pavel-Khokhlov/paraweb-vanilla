const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
  mode = "production";
}

console.log(mode + ' mode');

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: 'body', // put script to body location
      scriptLoading: "blocking", // defer off
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          mode === "development" ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-preset-env',
                  {
                    // options
                  },
                ],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
