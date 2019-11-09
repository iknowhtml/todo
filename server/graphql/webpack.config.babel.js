import path from 'path';

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};
const webpackConfiguration = () => ({
  entry: path.join(PATHS.src, 'index.js'),
  target: 'node',
  output: {
    path: PATHS.dist,
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
    ],
  },
});

export default webpackConfiguration;
