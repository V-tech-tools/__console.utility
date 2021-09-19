const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    //"vonsole.root": "./src/vonsole.js",
    "v_console.test": "./src/v_console.test.js",
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
