<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// User
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('logout', 'UserController@logout');
Route::post('register', 'UserController@register');

// Product
Route::group(['prefix' => 'products'], function() {
    Route::get('', 'ProductController@index');
    Route::get('{id}', 'ProductController@show');
    Route::post('', 'ProductController@store');
    Route::put('{id}', 'ProductController@update');
    Route::delete('{id}', 'ProductController@destroy');
});

// Bill
Route::group(['prefix' => 'bills'], function() {
    Route::get('', 'BillController@index');
    Route::get('{id}', 'BillController@show');
    Route::post('', 'BillController@store');
});

// Order
Route::group(['prefix' => 'orders'], function() {
    Route::post('', 'OrderController@store');
    Route::put('{id}', 'OrderController@update');
    Route::put('status/{id}', 'OrderController@updateStatus');
    Route::delete('{id}', 'OrderController@destroy');
});
