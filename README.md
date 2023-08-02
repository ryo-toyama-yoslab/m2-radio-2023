## Tweet

- 開発ことはじめ
  - フロントはdenoとfresh、バックエンドはPHPで動いている（色々チグハグですんません...）
  - `deno`をインストールしてから、このリポジトリ直下で`deno task start`すればローカルは立ち上がる
  - deploy先は[deno deploy](https://deno.com/deploy)がおすすめ

- パスはデフォルトと`chat`と`/switcher`
  - `chat`はその名の通りチャット
  - `/switcher`は管理者がアクセスして、コンテンツの切り替えなどを行う想定（特に制限とかはしてない）

- 基本的に以下を変えれば動きそう
  - `/static/gallery`配下の画像
  - `/island`配下のAPI呼び出し
    - チャットの読み込み、書き込み
    - 拍手の読み込み、書き込み
    - `NowPlaying`の更新と取得（`switcher` の切り替え周り）
  - 各APIはAPI呼び出し部の返り値の型をみていい感じに返すやつを作ればよさそう
