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
        return ProductResource::collection(Product::orderBy('created_at', 'desc')->get());
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
    
    public function update(ProductRequest $request, $id)
    {
        $product = Product::find($id);
        
        $this->CheckAdmin();

        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        
        if ($product->save()) {
            return new ProductResource($product); 
        }
        return [
            'message' => 'Update product errors'
        ];
    	
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        $this->CheckAdmin();

        if ($product->delete()) {
            return [
                'message' => 'Destroy product successfully'
            ];
        }
        return [
            'message' => 'Destroy product errors'
        ];
    }
}
