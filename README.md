# payjp.js v2の型定義

PAY.JPのクライアントサイドJavaScriptライブラリである `payjp.js` の `v2`の型定義ファイルを提供します。


## 🔖 利用時の注意

https://pay.jp/docs/payjs のドキュメントを元に作成しています。

`payjp.js` の `v2` の仕様変更で変わることがありますので、ご注意ください。

*あくまで、TypeScriptでの実装時に型の補完をきかせるため* であり、ランタイムの動作が保障される訳ではないことをご理解いただいた上で、お使いいただければと思います。


## 🏄 利用方法

### インストール

```bash
# npm
npm install --save-dev typedef-payjp-js

# yarn
yarn add -D typedef-payjp-js
```

#### NOTE

`v1.1` 以降をインストールする際は、 [payjp](https://www.npmjs.com/package/payjp) を別途インストールしてください。(既にインストールしている場合は不要です)


### windowオブジェクトに `Payjp` の型情報を追加

任意の場所に `global.d.ts` といったファイルを作成し、次の内容を記述します。

```ts
/// <reference types="typedef-payjp-js/global" />
```

次のコードのような形で、参照できます。

```ts
if (window.Payjp) {
  // 型補完がきけばOKです
  const payjpInstance = window.Payjp('pk_XXXX_XXXXXXXXX')
}
```

### 型定義の利用

```ts
import PayjpJs from "type-payjp-js"

// 必要に応じて、変数の型としてご利用ください
const cardBrand: PayjpJs.CardBrand = 'Visa'
```


## 🙏 不足やミスがありましたら...

issueで挙げていただくか、プルリク出していただけたら幸いです。
