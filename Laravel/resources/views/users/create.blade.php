<div class="text-center">
<form method="post" action="{{ route('users.store') }}">
@csrf
<div class="form-group row">
    <label class="col-from-label" for="name">アカウントID</label>
    <input type="text" class="form-control" name="name" id="name" value = "{{ old('name') }}">
</div>
<div class="form-group row">
    <label class="col-from-label" for="password">パスワード</label>
    <input type="password" class="form-control" name="password" id="password">
</div>
<div class="form-group row">
    <label class="col-from-label" for="password_confirmation">パスワード (確認)</label>
    <input type="password" class="form-control" name="password_confirmation" id="password_confirmation">
</div>
<div class="form-group row">
    <label class="col-from-label" for="role">権限</label>
    <select class="form-control" name="role" id="role">
            @foreach(config('role') as $topic=>$v)
                <option value="{{$topic}}" id="role" @if(old('role') == $topic) selected @endif>{{$v}}</option>
            @endforeach
    </select>
</div>
<div class="float-right">
    <input type="submit" class="btn btn-secondary" value="登録">
</div>
</form>
<a href="{{ route('logout')}}">ログアウト</a>
</div>
