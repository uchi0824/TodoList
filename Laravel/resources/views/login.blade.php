<form action={{ route('postAuth') }} method="post">
    @csrf
<div class="form-group row">
<label class="col-3 col-from-label" for="name">ID</label>
    <div class="col-6">
        <input type="text" class="form-control" name="name" id="name">
    </div>
</div>
<div class="form-group row">
    <label class="col-3 col-from-label" for="password">パスワード</label>
        <div class="col-6">
            <input type="password" class="form-control" name="password" id="password">
        </div>
</div>
<div class="form-group row">
    <div class="offset-2 col-7">
        <div class="float-right">
                <input type="submit" class="btn btn-secondary" value="login">
        </div>
    </div>
</div>
</form>
</div>
</div>
