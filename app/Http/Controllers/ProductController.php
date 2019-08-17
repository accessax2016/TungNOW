<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Product;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
    {
        return ProductResource::collection(Product::get());
    }

    public function show($id)
    {
    	return new ProductResource(Product::find($id));
    }

    public function store(ProductRequest $request) 
	{
		$product = new Product();

    	$product->user_id = Auth::id();
    	$product->name = $request->name;
    	// $product->image = $request->image;
        $product->price = $request->price;
        $product->description = $request->description;
    	$product->created_at = Carbon::now();
    	$product->updated_at = Carbon::now();

    	if ($product->save()) {
            return new ProductResource(Product::find($product->id)); 
    	}
    	return response([
            'message' => 'Store product errors'
        ], 400);
	}
}
