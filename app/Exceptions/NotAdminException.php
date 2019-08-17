<?php

namespace App\Exceptions;

use Exception;

class NotAdminException extends Exception
{
    public function render()
    {
    	return response([
    		'message' => 'You do not have a permission'
    	], 400);
    }
}
