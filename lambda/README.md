# hello-clova-with-lambda

- Clova のサンプルを heroku へデプロイ

## Prerequires

- git

## Build

```bash
$ npm install
$ npm run build
```

## Deploy

### zip 化

```bash
$ zip -r package.zip *
```

### AWS マネジメントコンソールから Lambda を設定 (詳細は割愛)

1. Lambda の関数を作成
1. `.zip ファイルをアップロード` で `package.zip` をアップロード
1. ハンドラに `lib/index.handle` を設定
1. 保存

### AWS マネジメントコンソールから API Gateway を設定 (詳細は割愛)

1. API を作成
1. `POST` メソッドを作成
1. 上記で作成した Lambda につなげる
1. デプロイ
