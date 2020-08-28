@extends('layouts.app')

@section('content')
<div class="container">
    @auth
    <div id='example'></div>
    @endauth
</div>
@endsection
