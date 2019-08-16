<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = "products";

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id', 'id');
    }

    public function orders()
    {
        return $this->hasMany('App\Order', 'product_id', 'id');
    }
}
