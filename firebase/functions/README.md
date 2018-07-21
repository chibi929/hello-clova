# hello-clova-with-firebase

- Clova のサンプルを firebase へデプロイ

## Prerequires

- git
- firebase-cli

## Prepare

- `.firebaserc` の対象プロジェクトを設定

```json
{
  "projects": {
    "default": "${PROJECT_ID}"
  }
}
```

## Build

```bash
$ npm install
$ npm run build
```

## Deploy

```bash
$ npm run deploy
```
