const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const analyzerMode = process.env.INTERACTIVE_ANALYZE ? "server" : "json";

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode,
        reportFileName: `./__build/bundlereport.json`,
      }),
    ],
  });
};