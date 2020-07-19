<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Usersquest;
use App\Http\Requests\EditRequest;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersController extends Controller
{
    /**
     * ユーザー一覧画面表示
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('users.index', ['users' => User::paginate(10)]);
    }

    /**
     * ユーザー新規登録画面表示
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('users.create');
    }

    /**
     * ユーザー新規登録処理
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request  $request)
    {
        $user           = new User;
        $user->name     = $request->name;
        $user->role     = $request->role;
        $user->password = Hash::make($request->password);
        $user->save();
        return redirect()->route('users.index')->with('user_success', 'ユーザー情報を登録しました。');
    }

    /**
     * ユーザー編集ページの表示
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return view('users.edit', ['user' => $user]);
    }


    /**
     * ユーザーアップデート処理
     *
     * @param  \Illuminate\Http\EditRequest  $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function update(EditRequest $request, User $user)
    {
        $user->name = $request->input('name');
        $user->role = $request->input('role');

        if ($request->input('password') != '') {
            $user->password = Hash::make($request->input('password'));
        }
        $user->save();
        return redirect()->route('users.index')->with('user_success', 'ユーザー情報を変更しました。');
    }

    /**
     * ユーザー削除処理
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('users.index')->with('user_success', 'ユーザー情報を削除しました。');
    }
}
