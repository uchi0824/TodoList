<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\PasswordRequest;
use App\Todo;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Auth::user();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $id = Auth::id();

        return Todo::where('is_public', 0)
            ->where('user_id', $id)
            ->orderBy('status', 'asc')
            ->orderBy('deadline', 'asc')->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\PasswordRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PasswordRequest $request, User $user)
    {
        //現在のパスワードが正しいかを調べる
        if (!(Hash::check($request->get('currentPassword'), Auth::user()->password))) {
            return response()->json(['error' => '現在のパスワードが間違っています'], 500);
        }
        //現在のパスワードと新しいパスワードが違っているかを調べる
        if (strcmp($request->get('currentPassword'), $request->get('password')) == 0) {
            return response()->json(['error' => '現在のパスワードと新しいパスワードが同じです'], 500);
        }

        if ($request->input('password') != '') {
            $user->password = Hash::make($request->input('password'));
        }
        $user->save();

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        // ログアウト後に処理
        $user = Auth::user();

        Auth::logout();
        $user->delete();
    }
}
