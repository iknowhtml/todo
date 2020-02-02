module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  webpackFinal: config => ({
    ...config,
    resolve: {
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
