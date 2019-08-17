<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Auth;
use App\Exceptions\NotAdminException;
use App\Exceptions\NotOwnerException;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function CheckAdmin()
    {
        if (!Auth::user()->admin) {
            throw new NotAdminException;
        }
    }

    public function CheckOwner($object)
    {
        if (Auth::id() !== $object->user_id) {
            throw new NotOwnerException();
        }
    }

    public function paginate($items, $pageSize = 10, $pageNumber = 1, $options = [])
    {
        $pageNumber = $pageNumber ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($pageNumber, $pageSize), $items->count(), $pageSize, $pageNumber, $options);
    }
}
