module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  webpackFinal: config => ({
    ...config,
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        'react-native$': 'react-native-web',
      },
    },
  }),
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
  ],
};
