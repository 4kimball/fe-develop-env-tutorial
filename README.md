# fe-develop-env-tutorial

- `package.json` 생성

```shell
npm init -y
```

- `webpack` 설치

```shell
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

- `package.json`에 scriptts 추가
- `webpack serve`는 `webpack-dev-server`를 실행한다.

```json
{
  "scripts": {
    "dev": "webpack serve --mode=development"
  }
}
```

- `webpack.config.js` 설정

```javascript
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
```
