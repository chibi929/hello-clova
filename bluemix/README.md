# hello-clova-with-bluemix

- Clova のサンプルを bluemix へデプロイ

## Prerequires

- git
- Bluemix CLI

## Build

```bash
$ npm install
$ npm run build
```


## Deploy

### ログイン

```bash
$ bx login
# ID(メールアドレス) 入力
# パスワード入力

$ bx target -o ${ORG} -s ${SPACE}
```

### デプロイ

```bash
$ bx app push
```

### 環境変数の設定

```bash
# process.env.APPLICATION_ID で取得できるようになる
bx app env-set clova-test APPLICATION_ID ${Extension ID}
bx app restage clova-test
```
