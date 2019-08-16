<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Bill extends Model
{
    protected $table = "bills";

    public function shipper()
    {
        return $this->belongsTo('App\User', 'shipper_id', 'id');
    }

    public function status()
    {
        return $this->belongsTo('App\Status', 'status_id', 'id');
    }

    public function orders()
    {
        return $this->hasMany('App\Order', 'bill_id', 'id');
    }
}
