<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\TodoEditRequest;
use App\Http\Requests\TodoRequest;
use App\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $is_public = $request->boolean('is_public');
        if ($is_public) {
            return Todo::all();
        }
        $id = Auth::id();

        return Todo::where('user_id', $id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\TodoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TodoRequest $request)
    {
        $todo           = new Todo;
        $todo->title    = $request->title;
        $todo->user_id  = Auth::id();
        $todo->status   = config('consts.todo.STATUS_DO');
        $todo->deadline = $request->deadline;
        $todo->save();
        return $todo;
    }

    /**
     * Display the specified resource.
     *
     * @param  Todo $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        return $todo;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\TodoEditRequest  $request
     * @param  int  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(TodoEditRequest $request, Todo $todo)
    {
        // $request->user_id, Auth::id()
        $todo->update($request->all());
        // $todo->title    = $request->title;
        // $todo->deadline = $request->deadline;
        // $todo->save();
    }

    public function statusupdate(TodoEditRequest $request, Todo $todo)
    {
        $todo->status = config('consts.todo.STATUS_DONE');
        $todo->save();
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
    }
}
