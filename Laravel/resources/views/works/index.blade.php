<!doctype html>
<html lang="ja">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
+   <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSS -->
+   <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <title>todolist</title>
</head>

<body>
    <div id="app">
        <div class="container">
            <h3 class="mt-5">Todo 管理システム</h3>

            <!-- form -->
            <div class="form-group mt-4">
                <label for="todo">新規Todo</label>
                <input type="text" class="form-control" id="todo">
            </div>
            <button type="submit" class="btn btn-primary">登録</button>

            <!-- table -->
            <table class="table mt-5">
                <thead>
                    <th>ID</th><th>タスク</th><th>完了</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>タスクがでる</td>
                        <td><button class="btn btn-secondary">完了</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>タスクがでる</td>
                        <td><button class="btn btn-secondary">完了</button></td></tr>
                </tbody>
            </table>
        </div>
    </div>

<!-- avaScript -->
+<script src="{{ asset('js/app.js')}}"></script>

@can('admin')
<a href="{{ route('users.index')}}">ユーザー管理</a>
@endcan
<a href="{{ route('logout')}}">ログアウト</a>
</body>
</html>
