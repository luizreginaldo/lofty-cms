<?php

use Illuminate\Database\Seeder;
use App\User as User;

class UserTableSeeder extends Seeder {

    public function run() {
        User::truncate();

        User::create( [
            'email' => 'test@test.com' ,
            'password' => Hash::make( 'test' ) ,
            'name' => 'Test' ,
        ] );

        User::create( [
            'email' => 'admin@admin.com' ,
            'password' => Hash::make( 'admin' ) ,
            'name' => 'Admin' ,
        ] );
    }
}