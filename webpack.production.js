const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    v_console: "./src/v_console.js",
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
