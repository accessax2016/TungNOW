<?php

use Illuminate\Database\Seeder;

class BillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 1; $i <= 10; $i++) {
            $date = $faker->dateTimeThisYear;
            DB::table('bills')->insert([
                // 'status_id' => 1,
                // 'shiper_id' => 1,
                'created_at' => $date,
                'updated_at' => $date
            ]);
        }
    }
}
