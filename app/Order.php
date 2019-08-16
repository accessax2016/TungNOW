<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = "orders";

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function status()
    {
        return $this->belongsTo('App\Status', 'status_id', 'id');
    }

    public function product()
    {
        return $this->belongsTo('App\Product', 'product_id', 'id');
    }

    public function bill()
    {
        return $this->belongsTo('App\Bill', 'bill_id', 'id');
    }
}
