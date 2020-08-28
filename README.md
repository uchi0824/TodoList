# ToDoList
日々のやる事をリスト化する。

# Features
ToDoListの期限日や完了、未完を確認できる。
非同期通信で処理を行う。

# Requirement

Laravel Framework 7.22.4
PHP 7.4.5
Composer version 1.10.10
npm 6.14.5
react@16.13.1
jquery@3.5.1
laravel-mix@5.0.4
react-dom@16.13.1
react-hook-form@6.2.0
react-router-dom@5.2.0
resolve-url-loader@3.1.1
sass@1.26.10
sass-loader@8.0.2
swr@0.3.0

# 環境開発
1.Vagrant を DOWNLOAD VAGRANT からダウンロードして、インストールしてください。
2.VirtualBox を Download VirtualBox からダウンロードして、インストールしてください。
3.ターミナルから下記のコマンドを打って、Homestead vagrant box をダウンロードしてください
      vagrant box add laravel/homestead
4.ホームディレクトリ（/Users/ユーザー名）の直下にディレクトリを作成します。
5.作成したディレクトリに移動したら
下記のコマンド打ちHomesteadのファイルをダウンロードします。
git clone https://github.com/laravel/homestead.git Homestead
作成したディレクトリの中に Homestead のファイルがダウンロードされます.。
6.ダウンロードした Homestead のフォルダに移動してください。
Homestead ディレクトリに移動したら、下記のコマンドを入力してください。
       bash init.sh
Homestead initialized! と表示され、Homestead.yaml が作成されます。
7.ホームディレクトリに移動した後に、
下記コマンドを打ち、SSH鍵ファイルが存在しないか確認します。
ls -la I grep .ssh
id_rsa と id_rsa.pub が表示されれば、既にSSH鍵ファイルはあります。
無い方は、作成します。
ssh-keygen -t rsa
Enter file in which to save the key と保存するディレクトリを聞かれるので、そのまま enter を押します。
Enter passphrase パスフレーズを求められますので、任意のパスフレーズを入力してください。
再度パスフレーズを求められるので、先程入力したパスフレーズを入力してください。
これでSSH鍵ファイルが作成されます。
8.Homestead.yamlの中の
folders の mapを書き替えます。
9.Homested ディレクトリに移動した後に下記のようにコマンドを入力します。
vagrant up
10.vagrant up で仮想マシンは起動されていますので、
仮想マシンを操作するために仮想マシンにログインします。
vagrant ssh
11.SSHを利用して仮想マシンにログインしたので、次は Code ディレクトリに移動します。
cd Code/
12.次に composer を使って Laravel のファイルをダウンロードします。
下記は記述例です。
composer create-project laravel/laravel --prefer-dist ディレクトリ名
13.Homestead.yaml に記述した IPアドレスにブラウザからアクセスすると下記の Laravel ページが表示されます。


# Usage

1.ToDoListを使用するにはまず、
Registerページで必要事項を入力しアカウントを登録して下さい。
2.ログインページで登録したアカウント情報を入力しログインして下さい。
3.ログインに成功するとToDoPageが表示され、登録済みのToDoが表示されます。
4.ボタンを押すことでtodoの表示が切り替えられます。
例えば完了表示ボタンを押すと完了したtodoのみが表示されます。
5.新規todoが登録できます。
公開か非公開を選び、todoのタイトルを入力して下さい。
次に期限日を決めてCreateボタンで登録して下さい。
登録したtodoがlistに追加されます。
6.非公開で登録した場合は、ヘッダーのドロップダウンメニューの中の、
ToDoList（非公開）に追加されます。
非公開で登録したçはログインユーザーのみが、閲覧可能となっています。
7.todoをクリックすると登録済みのtodoを編集できます。
タイトルをクリックし編集するだけで、後はカーソルが離れた時点で更新されます。
8.完了ボタン
未完ボタンをクリックすると完了に表示が変わります。
完了ボタンをクリックすると未完に変わります。
このボタンでtodoの状態を表示することができます。
9.一括削除
チェクボックスにチェックを入れチェックしたtodoを一括削除ボタンを押すと
選択したtodoが一括削除できます。
削除ボタンで個別の削除も可能です。
10.パスワード更新・アカウント削除
パスワード更新・アカウント削除ページでパスワードが更新できます。
アカウントを削除ボタンを押してアカウントの削除もできます。

# api仕様書

sample_api.apib
FORMAT: 1A
HOST: http://localhost/api

#Sample API
Frisbyを触ってみるために最低限の機能だけで作ったWebAPI

## ユーザ登録 [POST /users]
新規ユーザを登録する

+ Request (application/json)
    + Attributes
        + name: `oskamathis` (string, required) - ユーザ名
        + email: `oskamathis@gmail.com` (string, required) - メールアドレス
        + password: `1xU35jQy` (string, required) - パスワード

+ Response 200 (application/json)
    + Attributes
        + result: `true` (boolean) - 登録結果
        + name: `oskamathis` (string) - ユーザ名
        + email: `oskamathis@gmail.com` (string) - メールアドレス
        + message: `User creation succeeded.` (string) - 登録メッセージ


## トークン発行 [POST /login]
JWT認証用のトークンを発行する

+ Request (application/json)
    + Attributes
        + email: `oskamathis@gmail.com` (string, required)
        + password: `1xU35jQy` (string, required)

+ Response 200 (application/json)
    + Attributes
        + access_token: `{token}` (string)
        + token_type: `bearer` (string)
        + expire_in: `60` (number) - トークンの有効期限

+ Response 401 (application/json)
    + Body
        ```
        {
            "error": "Unauthorized"
        }
        ```


## ユーザ情報取得 [GET /user]
自分自身のアカウント情報を取得する

+ Request
    + Headers
        ```
        Authorization: Bearer {token}
        ```

+ Response 200 (application/json)
    + Body
        ```
        {
            "id": 1,
            "name": "oskamathis",
            "email": "oskamathis@gmail.com",
            "email_verified_at": null,
            "created_at": "2019-05-23 12:19:26",
            "updated_at": "2019-05-23 12:19:26"
        }
        ```



# Author

* 内村圭宏
* ラテラルシンキング
* uchimura.y@lateral-t.co.jp

Thank you!
