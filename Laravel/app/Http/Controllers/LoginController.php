<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /**
     *  ログイン画面を表示する
     */
    public function index()
    {
        return view('login');
    }
    /**
     * ログイン認証を処理する
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Response
     */
    public function postAuth(Request $request)
    {
        $name = $request->name;
        $password = $request->password;
        if (Auth::attempt(['name' => $name, 'password' => $password])) {
            return redirect()->route('works')->with('success', 'ログインしました。');
        }
        return redirect()->route('login')->with('mistake', 'ログインに失敗しました。');
    }
    /**
     * ログアウト処理
     *
     */
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login')->with('logout', 'ログアウトしました。');
    }
}
