<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Bill;
use Illuminate\Support\Carbon;

class RenewBill extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'renew:bill';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Renew bill daily';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $bill = new Bill();

    	$bill->created_at = Carbon::now();
    	$bill->updated_at = Carbon::now();

    	$bill->save();
    }
}
