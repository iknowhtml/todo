module.exports = {
  presets: ['@babel/preset-env', '@babel/react'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '^react-native$': 'react-native-web',
        },
      },
    ],
  ],
};
