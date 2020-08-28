<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('todos')->insert([
            'id'        => '100',
            'title'     => '課題',
            'status'    => '2',
            'is_public' => '1',
            'deadline'  => '2020-09-03',
        ]);
    }
}
