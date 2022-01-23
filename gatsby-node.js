const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const chakraUiOptimization = require('chakra-ui-optimization-loader');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  const analyzerMode = process.env.INTERACTIVE_ANALYZE ? 'server' : 'json';

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js/,
          include: path.resolve('node_modules/@chakra-ui'),
          loader: 'chakra-ui-optimization-loader',
          options: {
            ignoreComponents: [
              'Alert',
              'Table',
              'Tabs',
              'Slider',
              'Wrap',
              'Checkbox',
              'Editable',
              'Form Control',
              'Input',
              'Number Input',
              'Pin Input',
              'Radio',
              'Range Slider',
              'Select',
              'Slider',
              'Switch',
              'TextArea',
              'Badge',
              'Close Button',
              'Code',
              'Divider',
              'Kbd',
              'List',
              'Stat',
              'Tag',
              'Circular Progress',
              'Skeleton',
              'Toast',
              'Alert Dialog',
              'Menu',
              'Modal',
              'Popover',
              'Tooltip',
              'Accordion',
              'Breadcrumb',
              'Avatar',
              'Portal',
              'Transitions',
              'Spinner',
              'Progress',
              'Drawer',
            ],
            ignoreColors: [
              'facebook',
              'purple',
              'green',
              'pink',
              'red',
              'orange',
              'teal',
              'blue',
              'cyan',
              'gray',
              'white',
              'black',
              'yellow',
              'linkedin',
              'facebook',
              'messenger',
              'whatsapp',
              'twitter',
              'telegram',
            ],
          },
        },
      ],
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode,
        reportFileName: `./__build/bundlereport.json`,
      }),
    ],
  });
};
