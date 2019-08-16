<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
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
            $product = $faker->company;
            DB::table('products')->insert([
                'user_id' => rand(1, 3),
                'name' => $product,
                'price' => rand(10000, 50000),
                'created_at' => $date,
                'updated_at' => $date
            ]);
        }
    }
}
