ユーザー管理
<a href='{{ route('users.create') }}' class="btn btn-secondary">新規登録</a>

<div class="text-center">
    <table class="table table-bordered">
        <tr class="table-active">
            <th class="text-center">ID</th>
            <th class="text-center">アカウント</th>
            <th class="text-center"></th>
            <th class="text-center"></th>
        </tr>
    @foreach ($users as $user)
        <tr>
            <td class="text-center">{{$user->id}}</td>
            <td class="text-center">{{$user->name}}</td>
            <td class="text-center">
                <a class="btn btn-outline-secondary" href="{{ route('users.edit',['user' => $user]) }}">編集</a></td>
            <td class="text-center">
            <form action="{{ route('users.destroy',['user' => $user]) }}" method="POST">
            @method('DELETE')
            @csrf
            <input type="submit" class="btn btn-outline-secondary" value="削除" onclick="return confirm('削除します。よろしいですか？')"/>
            </form>
            </td>
        </tr>
    @endforeach
    </table>
</div>
    <div class="float-right">
        <a href="{{ route('logout')}}">ログアウト</a>
    </div>
{{ $users->links() }}
