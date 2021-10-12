const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  resolve: {
    // 생략할 확장자 작성
    extensions: ['.vue', '.js'],

    // 별칭 짓기
    alias: {
      //src라는 폴더를 물결표시로 사용하겠다고 지정
      '~': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules\/(?!axios)/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        // 정규표현식.text() -> .vue확장자인 파일 찾기
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        // static폴더에서 파일을 복사해서 dist폴더로 넣기
          // to는 output에서 가져다 쓰기 때문에 생략
        { from: 'static'}
      ]
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};