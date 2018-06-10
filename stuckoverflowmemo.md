# nuxt.js でアプリ作るという事はJSのトレンド技術を一通り巡っていくのと同義？

ってくらい覚える事が多かったので抱いた感想。

## 自分のスペックから話す

・アプリエンジニア歴３カ月未満
・前職は製造業でプログラミングとは無縁
・RailsとJSは隙間時間で触っていた

会社ではまだ試用期間中です。

## Nuxtを使うのに必要な前知識たちは芋づる式に増えていった

## ES6で書くにあたってBabel環境構築を見直した
polyfillって何？transpilerは一つあれば十分ではないのか?
Babelについてわからない事めも
 - devdependenciesにbabel系のpluginsを入れたら起動した。

 - Nuxtjsは依存するplugin(webpackやbabelなど)のconfigファイルに載せるべき特別な情報をnuxt.config.jsにまとめる事ができる
  - 例えばbuild: { babel: }はbabelrcの設定をそのまま書けばいいし、webpackサポートツールに関しては対応した属性の中にそのままoptionを書けばnuxt.config.jsが各プラグインに対して変更の反映を要求してくれる

  - ところでES6 syntaxを扱うのになぜここまでモジュールが必要なのか、それぞれの役割をまとめてみた
    - babel-loader: Webpack上でES6を走らせるのに必要(webpackがES6を認識するのに必要?)
    - babel-plugin-transform-runtime: ES6で使える関数をimportやrequire記述なしで使えるようにする
    - babel-preset-es2015: ES2015の記法をサポート？
    - babel-preset-stage-0: stage系は細かい規格ごとの記法をサポートしてくれるっぽい
    - babel-preset-stage-2: spread operator をサポートしてくれる

## なぜnuxt buildをする必要があるのか

## nuxt.config.jsでmoduleとpluginの意味を間違えないように
それぞれの違いはissuesに投稿されているがはっきり言って何をいってるかわからないので違いを体感してみる

https://github.com/nuxt/nuxt.js/issues/2820

### bootstrapとfont awesomeはmoduleでelement-uiはplugin??

### Modules
https://nuxtjs.org/guide/modules/


### Plugins
https://nuxtjs.org/guide/plugins/
ライブラリをnuxt内全体で使えるようにする？

## staticとassetsを分ける必要性

imageを格納する箇所が上記の2つだがなぜ分ける必要性が?
Webpackを通すかどうかの分け方なのでどうやらエコシステムが絡んでいる?

## コンポーネントにurlを渡すと正しくパースされない

サムネイルをnuxt上に保存し、該当するパスをデータに格納して子コンポーネントに渡すと見つからない。

これを渡したいのに...
```
thumbnail: '~/assets/images/hello.png'
```

404が返ってきてしまう
```
thumbnail: /~/assets/images/hello.png
```

require("")で解決。これに関してwebpackのドキュメントを確認しないといけない

### file-loaderを読む

### 画像参照時にrequireを使うか使わないかでアプリの反応が大きく変わる

- requireがあるとcannot find moduleが返ってくる、所謂500エラー
- 変数をそのまま春と404が返ってくる

# tsのenumでキー値をそのまま文字列として出力したい

# tsで定義したクラスのインスタンスメソッドがvueコンポーネント上で使えない

クラス定義をstore上で定義してもgot Object

# storeやclass定義を変えたら一度npm run devし直す
コンパイラやビルダが機能とは違った動きを見せてくれるゾ☆
ビルドの仕組みを調べないといけないね


# パスの指定の仕方

ディレクトリはConstant(頭が大文字)でないといけない
(公式ドキュメントではディレクトリ名は小文字なのになぜ？)

# Nuxt上におけるVuexのStoreの扱い

例えば下記のstoreを扱っているとする

```
store = {
  state: {
    something: "something"
  },
  modules: {
    helpers: {
      state: {
        atarashii: "atarashii"
      }
    }
  }
}
```

module下のstateを使おうとプロパティの階層を辿る書き方をしてもundefinedが返ってきてしまう

```
this.$store.modules.helpers.state.atarashii
this.$store.helpers.state.atarashii
// これはダメ
```


現実はこう

```
this.$store.state,atarashii
```

便利だけどなんかよくわからない...
Vuexはmodulesを取り込むとうまい事store本体のそれぞれの機能(store, actions, mutations)に取り込むという解釈でよかろうか？

# ライフサイクルの差異

- created 画像を取得できる
- beforeMount 画像を取得できない(undiefined method 'call')

# Vue routerとSubmit処理

やりたい事: Nuxt上でリンク遷移を行うと同時にVuexのstoreを更新したい

どっちのやり方がいい?

- Vue routerを使う
```
<router-link to="/dashboard" @click="submit()">
  Write something
</router-link>
```

- ClickHandling用のメソッドを作り、その中でリダイレクト処理を行う
```
<button>
  Write Something
</button>

methods: {
  submit(){
    this.$store.actions.dispatch()
  }
}
```