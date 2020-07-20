<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorksController extends Controller
{
    /**
     *  top画面を表示する
     */
    public function index()
    {
        return view('works.index');
    }
}
