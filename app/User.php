<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;
use Hash;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'id', 'email', 'email_verified_at', 'active',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function products() {
        return $this->hasMany('App\Product', 'user_id', 'id');
    }

    // public function bills() {
    //     return $this->hasMany('App\Bill', 'shiper_id', 'id');
    // }

    public function orders() {
        return $this->hasMany('App\Order', 'user_id', 'id');
    }

    public function validateForPassportPasswordGrant($password) {
        if (Hash::check($password, $this->getAuthPassword())) { 
            if ($this->active) { 
                return true;
            }
        }
        return false;
    }
}
