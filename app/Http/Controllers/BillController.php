<?php

namespace App\Http\Controllers;

use App\Bill;
use App\Http\Requests\BillRequest;
use App\Http\Resources\BillResource;
use Carbon\Carbon;
use Illuminate\Http\Request;

class BillController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function index(Request $request)
	{
        $bills = Bill::orderByDesc('created_at')->get();

        $bills = $this->paginate($bills, $request->pageSize, $request->pageNumber);
        
		return BillResource::collection($bills);
    }

    public function show($id)
    {
    	return new BillResource(Bill::find($id));
    }

    public function store(BillRequest $request) 
	{
		$bill = new Bill();

    	$bill->created_at = Carbon::now();
    	$bill->updated_at = Carbon::now();

    	if ($bill->save()) {
            return new BillResource(Bill::find($bill->id)); 
    	}
    	return response([
            'message' => 'Store bill errors'
        ], 400);
	}
}
