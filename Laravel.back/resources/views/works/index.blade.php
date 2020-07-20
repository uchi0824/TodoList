
<p>uchimura</p>
@can('admin')
<a href="{{ route('users.index')}}">ユーザー編集</a>
@endcan
<a class="nav-link" href="{{ route('logout')}}">ログアウト</a>
