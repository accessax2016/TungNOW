<?php

namespace App\Exceptions;

use Exception;

class NotOwnerException extends Exception
{
    public function render()
    {
    	return response([
    		'message' => 'You are not a owner'
    	], 400);
    }
}
