module.exports = {
  mode: "production",
  entry: {
    app_root: "./src/vonsole.js",
  },
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
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
