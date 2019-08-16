<?php

use Illuminate\Database\Seeder;

class OrdersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        for ($i = 1; $i <= 50; $i++) {
            $date = $faker->dateTimeThisYear;
            DB::table('orders')->insert([
                'user_id' => rand(1, 3),
                'product_id' => rand(1, 10),
                'bill_id' => rand(1, 10),
                'status_id' => 1,
                'created_at' => $date,
                'updated_at' => $date
            ]);
        }
    }
}
