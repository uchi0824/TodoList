<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(){
        $array = [
            'aa',
            'bb',
            'cc',
            'cd',
        ];
        return response()->json($array);
    }
}
