<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Todo extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title', 'status', 'deadline', 'user_id',
    ];

    /**
     * このtodoを所有するuserを取得
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
