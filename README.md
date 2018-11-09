# mix-favicon
Serve favicon

デザイナーが node.js とサーバサイド周りの勉強にちまちま作ってます。
仕様は気紛れに変わります。

## Overview
ブラウザからの ```favicon.ico``` へのリクエストに favicon を返す。

## Usage

```js
const mixer = require('mixer')
const favicon = require('mix-favicon')

const app = new mixer(favicon('./favicon.ico'))

app.listen(3000)
```

## ToDo
勉強中
- オプション機能とか
- エラーハンドリング
- テスト

## mix modules

- [mixer](https://github.com/imatomix/mixer) : サーバー処理
- [mix-router](https://github.com/imatomix/mix-router) : ルーティング機能
- [mix-serve](https://github.com/imatomix/mix-serve) : 静的ファイルのサーブ
- mix-cors : cors処理（作ろうかな）
- mix-csrf : csrf処理（作ろうかな）
