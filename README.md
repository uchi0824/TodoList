# ToDoList
日々のやる事をリスト化する。

# Features
ToDoListの期限日や完了、未完を確認できる。
非同期通信で処理を行う。

# Requirement

- Laravel Framework 7.22.4
- PHP 7.4.5
- Composer version 1.10.10
- npm 6.14.5
- react@16.13.1
- jquery@3.5.1
- laravel-mix@5.0.4
- react-dom@16.13.1
- react-hook-form@6.2.0
- react-router-dom@5.2.0
- resolve-url-loader@3.1.1
- sass@1.26.10
- sass-loader@8.0.2
- swr@0.3.0

# 環境開発
### Vagrant 

DOWNLOAD VAGRANT からダウンロードして、インストールしてください。

VirtualBox を Download VirtualBox からダウンロードして、インストールしてください。

ターミナルから下記のコマンドを打って、Homestead vagrant box をダウンロードしてください

```
$ vagrant box add laravel/homestead
```

ホームディレクトリ（/Users/ユーザー名）の直下にディレクトリを作成します。

作成したディレクトリに移動したら

下記のコマンド打ちHomesteadのファイルをダウンロードします。

```
git clone https://github.com/laravel/homestead.git Homestead
```

作成したディレクトリの中に Homestead のファイルがダウンロードされます.。

ダウンロードした Homestead のフォルダに移動してください。

Homestead ディレクトリに移動したら、下記のコマンドを入力してください。

```
$ bash init.sh
```

`Homestead initialized!`と表示され、Homestead.yaml が作成されます。

### ssh鍵

ホームディレクトリに移動した後に、

下記コマンドを打ち、SSH鍵ファイルが存在しないか確認します。

```
ls -la I grep .ssh
```

`d_rsa` と `id_rsa.pub` が表示されれば、既にSSH鍵ファイルはあります。

無い方は、作成します。

```
$ ssh-keygen -t rsa
```

Enter file in which to save the key と保存するディレクトリを聞かれるので、そのまま enter を押します。

Enter passphrase パスフレーズを求められますので、任意のパスフレーズを入力してください。

再度パスフレーズを求められるので、先程入力したパスフレーズを入力してください。

これでSSH鍵ファイルが作成されます。

### サーバーの起動

Homestead.yamlの中の

folders の mapを書き替えます。

Homested ディレクトリに移動した後に下記のようにコマンドを入力します。

```
$ vagrant up
```

vagrant up で仮想マシンは起動されていますので、

仮想マシンを操作するために仮想マシンにログインします。

```
$ vagrant ssh
```

SSHを利用して仮想マシンにログインしたので、次は Code ディレクトリに移動します。

```
$ cd Code/
```

次に composer を使って Laravel のファイルをダウンロードします。

下記は記述例です。

```
$ composer create-project laravel/laravel --prefer-dist ディレクトリ名
```

Homestead.yaml に記述した IPアドレスにブラウザからアクセスすると下記の Laravel ページが表示されます。


# Usage

### ログイン
ToDoListを使用するにはまず、Registerページで必要事項を入力しアカウントを登録して下さい。

ログインページで登録したアカウント情報を入力しログインして下さい。

ログインに成功するとToDoPageが表示され、登録済みのToDoが表示されます。

ヘッダーのドロップダウンメニューから下記のそれぞれのページへ遷移できます。

### ToDoPage

ボタンを押すことでtodoの表示が切り替えられます。例えば完了表示ボタンを押すと完了したtodoのみが表示されます。

新規todoが登録できます。公開か非公開を選び、todoのタイトルを入力して下さい。

次に期限日を決めてCreateボタンで登録して下さい。登録したtodoがlistに追加されます。

未完ボタンをクリックすると完了に表示が変わり、完了ボタンをクリックすると未完に変わります。このボタンでtodoの状態を表示することができます。

todoをクリックすると登録済みのtodoを編集できます。タイトルをクリックし編集すると、後はカーソルが離れた時点で更新されます。

チェクボックスにチェックを入れチェックしたtodoを一括削除ボタンを押すと選択したtodoが一括削除できます。

削除ボタンで個別のtdoの削除も可能です。


### ToPrivatePage

非公開で登録した場合は、ヘッダーのドロップダウンメニューの中の、ToDoList（非公開）に追加されます。

非公開で登録したtodoはログインユーザーのみが、閲覧可能となっています。

### パスワード更新・アカウント削除

パスワード更新・アカウント削除ページでパスワードが更新できます。

アカウントを削除ボタンを押してアカウントの削除もできます。

### ログアウト

ヘッダーのドロップダウンメニューからログアウトして下さい。

### api仕様書

title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
### Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#general


<!-- START_2b6e5a4b188cb183c7e59558cce36cb6 -->
### Display a listing of the resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/user`


<!-- END_2b6e5a4b188cb183c7e59558cce36cb6 -->

<!-- START_667c2a22e03ef893e43f745d79214fb4 -->
### Display a listing of the resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/todo" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/todo"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[
    {
        "id": 103,
        "user_id": 7,
        "user_name": "flowerbox",
        "title": "fddddddd",
        "created_at": "2020-08-28T12:19:24.000000Z",
        "updated_at": "2020-08-28T12:19:24.000000Z",
        "status": 1,
        "is_public": 1,
        "deadline": "2020-08-05",
        "deleted_at": null
    },
    {
        "id": 90,
        "user_id": 7,
        "user_name": "flowerbox",
        "title": "買い出し",
        "created_at": "2020-08-18T08:52:08.000000Z",
        "updated_at": "2020-08-28T12:22:30.000000Z",
        "status": 1,
        "is_public": 1,
        "deadline": "2020-08-29",
        "deleted_at": null
    },
    {
        "id": 102,
        "user_id": 7,
        "user_name": "flowerbox",
        "title": "ffffff",
        "created_at": "2020-08-28T12:15:09.000000Z",
        "updated_at": "2020-08-28T12:15:09.000000Z",
        "status": 1,
        "is_public": 1,
        "deadline": "2020-08-31",
        "deleted_at": null
    },
    {
        "id": 76,
        "user_id": 8,
        "user_name": "canpus",
        "title": "洗車",
        "created_at": "2020-08-12T07:24:34.000000Z",
        "updated_at": "2020-08-18T09:19:00.000000Z",
        "status": 2,
        "is_public": 1,
        "deadline": "2020-08-18",
        "deleted_at": null
    }
]
```

### HTTP Request
`GET api/todo`


<!-- END_667c2a22e03ef893e43f745d79214fb4 -->

<!-- START_cf3f5f8a2cd128c5688b5d9572796ba6 -->
### Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/todo" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/todo"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/todo`


<!-- END_cf3f5f8a2cd128c5688b5d9572796ba6 -->

<!-- START_b49e1006f4d3f4054ae66961ec3daf1f -->
### Display the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/todo/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/todo/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (404):

```json
{
    "message": "No query results for model [App\\Todo] 1"
}
```

### HTTP Request
`GET api/todo/{todo}`


<!-- END_b49e1006f4d3f4054ae66961ec3daf1f -->

<!-- START_723bcc54ef0a64db789a20c80830d621 -->
### Update the specified resource in storage.

> Example request:

```bash
curl -X PUT \
    "http://localhost/api/todo/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/todo/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/todo/{todo}`

`PATCH api/todo/{todo}`


<!-- END_723bcc54ef0a64db789a20c80830d621 -->

<!-- START_49a6a0e15eaab59faffeacbedeae6ee5 -->
### Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/api/todo/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/todo/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/todo/{todo}`


<!-- END_49a6a0e15eaab59faffeacbedeae6ee5 -->

<!-- START_f0654d3f2fc63c11f5723f233cc53c83 -->
### Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/user" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/user`


<!-- END_f0654d3f2fc63c11f5723f233cc53c83 -->

<!-- START_ceec0e0b1d13d731ad96603d26bccc2f -->
### Display the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/user/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[]
```

### HTTP Request
`GET api/user/{user}`


<!-- END_ceec0e0b1d13d731ad96603d26bccc2f -->

<!-- START_a4a2abed1e8e8cad5e6a3282812fe3f3 -->
### Update the specified resource in storage.

> Example request:

```bash
curl -X PUT \
    "http://localhost/api/user/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/user/{user}`

`PATCH api/user/{user}`


<!-- END_a4a2abed1e8e8cad5e6a3282812fe3f3 -->

<!-- START_4bb7fb4a7501d3cb1ed21acfc3b205a9 -->
### Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/api/user/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/user/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/user/{user}`


<!-- END_4bb7fb4a7501d3cb1ed21acfc3b205a9 -->

<!-- START_66e08d3cc8222573018fed49e121e96d -->
### Show the application&#039;s login form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET login`


<!-- END_66e08d3cc8222573018fed49e121e96d -->

<!-- START_ba35aa39474cb98cfb31829e70eb8b74 -->
### Handle a login request to the application.

> Example request:

```bash
curl -X POST \
    "http://localhost/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST login`


<!-- END_ba35aa39474cb98cfb31829e70eb8b74 -->

<!-- START_e65925f23b9bc6b93d9356895f29f80c -->
### Log the user out of the application.

> Example request:

```bash
curl -X POST \
    "http://localhost/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST logout`


<!-- END_e65925f23b9bc6b93d9356895f29f80c -->

<!-- START_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->
### Show the application registration form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET register`


<!-- END_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->

<!-- START_d7aad7b5ac127700500280d511a3db01 -->
### Handle a registration request for the application.

> Example request:

```bash
curl -X POST \
    "http://localhost/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST register`


<!-- END_d7aad7b5ac127700500280d511a3db01 -->

<!-- START_d72797bae6d0b1f3a341ebb1f8900441 -->
### Display the form to request a password reset link.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/password/reset" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/reset"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset`


<!-- END_d72797bae6d0b1f3a341ebb1f8900441 -->

<!-- START_feb40f06a93c80d742181b6ffb6b734e -->
### Send a reset link to the given user.

> Example request:

```bash
curl -X POST \
    "http://localhost/password/email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/email"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/email`


<!-- END_feb40f06a93c80d742181b6ffb6b734e -->

<!-- START_e1605a6e5ceee9d1aeb7729216635fd7 -->
### Display the password reset view for the given token.

If no token is present, display the link request form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/password/reset/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/reset/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset/{token}`


<!-- END_e1605a6e5ceee9d1aeb7729216635fd7 -->

<!-- START_cafb407b7a846b31491f97719bb15aef -->
### Reset the given user&#039;s password.

> Example request:

```bash
curl -X POST \
    "http://localhost/password/reset" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/reset"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/reset`


<!-- END_cafb407b7a846b31491f97719bb15aef -->

<!-- START_b77aedc454e9471a35dcb175278ec997 -->
### Display the password confirmation view.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/password/confirm" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/confirm"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET password/confirm`


<!-- END_b77aedc454e9471a35dcb175278ec997 -->

<!-- START_54462d3613f2262e741142161c0e6fea -->
### Confirm the given user&#039;s password.

> Example request:

```bash
curl -X POST \
    "http://localhost/password/confirm" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/confirm"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/confirm`


<!-- END_54462d3613f2262e741142161c0e6fea -->






# Author

* 内村圭宏
* ラテラルシンキング
* uchimura.y@lateral-t.co.jp

Thank you!


