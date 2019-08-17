<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderResquest;
use App\Http\Resources\OrderResource;
use App\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function store(OrderResquest $request)
    {
        $order = new Order();

        $order->user_id = Auth::id();
        $order->product_id = $request->product_id;
        $order->bill_id = $request->bill_id;
        $order->status_id = 1;
        $order->amount = $request->amount;
        $order->note = $request->note;
        $order->created_at = Carbon::now();
        $order->updated_at = Carbon::now();

        if ($order->save()) {
            return new OrderResource(Order::find($order->id));
        }
        return response([
            'message' => 'Store order errors'
        ], 400);
    }

    public function update(OrderResquest $request, $id)
    {
        $order = Order::find($id);
        
        $this->CheckOwner($order);

        $order->product_id = $request->product_id;
        $order->amount = $request->amount;
        $order->note = $request->note;
        
        if ($order->save()) {
            return new OrderResource($order); 
        }
        return [
            'message' => 'Update order errors'
        ];
    	
    }

    public function updateStatus(OrderResquest $request, $id)
    {
        $this->CheckAdmin();

        $order = Order::find($id);

        $order->status_id = $request->status_id;
        
        if ($order->save()) {
            return new OrderResource($order); 
        }
        return [
            'message' => 'Update status order errors'
        ];
    	
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        $this->CheckOwner($order);

        if ($order->delete()) {
            return [
                'message' => 'Destroy order successfully'
            ];
        }
        return [
            'message' => 'Destroy order errors'
        ];
    }
}
