<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    protected $table = "statuses";

    // public function bills() {
    //     return $this->hasMany('App\Bill', 'status_id', 'id');
    // }

    public function orders() {
        return $this->hasMany('App\Order', 'status_id', 'id');
    }
}
