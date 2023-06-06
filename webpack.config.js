const path = require("path")

module.exports = {
  entry: "./github.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
}
