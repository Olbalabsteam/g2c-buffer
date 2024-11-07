// for debug const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = process.cwd();

module.exports = {
  mode: "production",
  target: "web",
  entry: {
    "Buffer": [`${path}/Buffer.js`],
  },
  output: {
    path: `${path}/dist`,
    filename: '[name].js',
    library: "Buffer"
  },
}
