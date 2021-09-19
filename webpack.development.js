module.exports = {
  mode: "development",
  entry: {
    app_root: "./src/vonsole.js",
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "test"),
    filename: "[name].v_pack.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
