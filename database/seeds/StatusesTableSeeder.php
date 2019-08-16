<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
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
        DB::table('statuses')->insert(
            [
                [
                    'name' => 'Pending',
                    'created_at' => $date,
                    'updated_at' => $date
                ],
                [
                    'name' => 'Processing',
                    'created_at' => $date,
                    'updated_at' => $date
                ],
                [
                    'name' => 'Done',
                    'created_at' => $date,
                    'updated_at' => $date
                ],
                [
                    'name' => 'Reject',
                    'created_at' => $date,
                    'updated_at' => $date
                ],
                [
                    'name' => 'Out Of Stock',
                    'created_at' => $date,
                    'updated_at' => $date
                ]
            ]
        );
    }
}
