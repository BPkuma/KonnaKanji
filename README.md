# KonnaKanji

## バージョン管理のルール
mainブランチを保護する<br>
mainブランチの直接変更を禁止し、いついかなる時も正しく動作する状態に保ちます。<br>
変更を加えるためには、mainブランチから新しく作業ブランチを作成し、変更を加えた後、プルリクエストを作成してレビューを行い、承認されたらmainブランチにマージします。<br><br>

mainブランチを保護するメリットは主に2つあります。<br><br>

- コードの品質を保証することができる<br>
mainブランチに変更を加えるには、レビューが必要になります。これにより、チーム全員がコードの品質を保証し、問題を事前に検出することができます。

- チーム開発の進捗をコードベースで追跡することができる<br>
コードレビューの通知をしておけば、メンバーのどの機能がどの段階にあるかを追跡することができます。
  
## mainブランチ保護の設定方法
GitHubのリポジトリの「Settings」 -> 「branches」 -> 「Branch protection rules」 -> 「Edit」から設定することができます。

- Require a pull request before merging<br>
&emsp;保護されているmainブランチにはプルリクエストを要求する

- Require approvals<br>
&emsp;マージする前にレビューを要求する

- Require linear history<br>
&emsp;複雑なマージコミットを禁止し結合履歴を管理しやすくする

- Do not allow bypassing the above settings<br>
&emsp;管理者であっても上記のルールを適用する

## GitHubの大まかな流れ
1.　issueを立てる<br>
2.　作業ブランチの作成<br>
3.　コードを作成・編集<br>
4.　プルリクエストを投げる<br>
5.　レビューしてもらう<br>
6.　mainにマージ<br>
7.　作業ブランチを削除<br>

## コマンドなどの細かい流れ
1.　現在のbranchを確認：`git branch`<br><br>
2.　もし作業ブランチにいる場合はmainに移動：`git switch main`<br><br>
3.　mainブランチを最新状態に更新：`git pull`<br><br>
4.　作業ブランチがなければ、作成し移動：`git switch -c <作成したいブランチ名>`<br><br>
5.　作業ブランチでコードの作成・編集を行う<br><br>
&emsp;機能ごとにaddとcommitの流れを繰り返す(git statusで必ず確認)<br><br>
&emsp;`git add . `&&`git commit -m 'コメント'`<br><br>
6.　pushする前に最新のmainを取り込む：`git switch main`&&`git pull`<br><br>
&emsp;作業ブランチに戻る：`git switch <作業ブランチ>`<br><br>
7.　もしリモートリポジトリからmainに変更があれば作業ブランチにmergeする：`git merge main`<br><br>
8.　githubに送る：`git push origin HEAD`<br><br>
9.　(githubに移動)githubのサイト上で「Compare & pull request」を押す。issueがあれば紐付けしてから、右下の緑ボタン「Create pull request」を押すとプルリクエストができる。<br><br>
10.　レビュワーは「Files changed」を押しレビューした後に、「Review changes」からコメント書いて「approve」する。その後「Merge pull requet」を押して「Confirm merge」を押すことでmainブランチにマージされる。最後に「Delete branch」を押してリモートの作業ブランチを削除する。<br><br>
11.　ターミナルのmainブランチに戻りpushした人はローカルのブランチも削除しておく：`git branch -D <作業していたブランチ名>`<br><br>
12.　最初に戻る<br><br>

# リポジトリ内の特定のブランチをpullしたい
git cloneした後、リポジトリ内の他のブランチをpullする時は

$ git pull origin pullしたいリモートブランチ名:ローカルブランチ名
例えば、リモートにあるgh-pagesというブランチをローカルのtestというブランチに持ってきたいときはこう。

$ git pull origin gh-pages:test

## commitコメントの書き方
一目で何をしたのかわかるようにコメントをつけましょう。<br>
例）
git commit -m 'add: XXXの機能を持つxxx.pyファイルを追加'<br><br>

機能追加 add:<br>
機能修正 update:<br>
バグ修正 fix:<br>
削除 remove:<br>
仕様の変更 change:<br>
整理 clean:<br>

## なぜ僕らはGitでバージョン管理をするのか
https://qiita.com/gakisan8273/items/d2d52a12ad553a82b94b
<br>
## 初心者がしっかりと理解できるようにGitのブランチを説明する
https://qiita.com/gakisan8273/items/0e0ad1fee2a7c623f8d6
<br>
## Gitを触り始めてからGitHubにpushするまでの流れを誰よりも丁寧に説明する
https://qiita.com/gakisan8273/items/6ebaf9217d140ff1f031
<br>
## ターミナルコマンド備忘録
https://qiita.com/ryouzi/items/f9dee1540a04a0bfb9a3
<br>
## チーム開発においてGit初心者がふみがちな地雷まとめ
https://techracho.bpsinc.jp/morimorihoge/2020_09_09/16856
<br>
## すでに消されたリモートリポジトリのブランチを、ローカルリポジトリでも根絶やしにしたい
https://www.r-staffing.co.jp/engineer/entry/20201023_1
<br>
