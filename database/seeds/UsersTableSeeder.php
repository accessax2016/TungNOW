<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        $date = $faker->dateTimeThisYear();
        DB::table('users')->insert(
            [
                [
                    'name' => 'Thanh Tung',
                    'email' => 'thanhtung@gmail.com',
                    'password' => bcrypt('123456'),
                    'admin' => true,
                    'remember_token' => Str::random(10),
                    'created_at' => $date,
                    'updated_at' => $date
                ],
                [
                    'name' => 'Thanh Tung 2',
                    'email' => 'thanhtung2@gmail.com',
                    'password' => bcrypt('123456'),
                    'admin' => false,
                    'remember_token' => Str::random(10),
                    'created_at' => $date,
                    'updated_at' => $date
                ],
                [
                    'name' => 'Thanh Tung 3',
                    'email' => 'thanhtung3@gmail.com',
                    'password' => bcrypt('123456'),
                    'admin' => false,
                    'remember_token' => Str::random(10),
                    'created_at' => $date,
                    'updated_at' => $date
                ]
            ]
        );
    }
}
