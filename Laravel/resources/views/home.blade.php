@extends('layouts.app')

@section('content')
<div class="container">
    @auth
    <div id='example'></div>
    <!-- <script src="{{asset('/js/app.js')}}"></script> -->
    @endauth
</div>
@endsection
