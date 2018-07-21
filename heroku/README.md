# hello-clova-with-heroku

- Clova のサンプルを heroku へデプロイ

## Prerequires

- git
- heroku CLI

## Build

```bash
$ npm install
$ npm run build
```


## Deploy

### ローカルリポジトリ作成

```bash
$ git init
```

### ログイン

```bash
$ heroku login
# ID(メールアドレス) 入力
# パスワード入力
```

### heroku app 作成

```bash
$ heroku create
# ここでリモートリポジトリが設定される
```

### 環境変数を準備

```bash
# process.env.APPLICATION_ID で取得できるようになる
$ heroku config:set APPLICATION_ID="${Extension ID}"

# デプロイ後、devDependencies もインストールしたいので false にする
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

### デプロイ

```bash
$ git add .
$ git commit -m "Add project."
$ git push heroku master
```
