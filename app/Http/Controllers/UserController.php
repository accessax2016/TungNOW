<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\User;
use App\Http\Requests\RegisterRequest;
use Carbon\Carbon;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except('register');
    }

    public function logout()
    {
        $accessToken = Auth::user()->token();

        DB::table('oauth_refresh_tokens')
            ->where('access_token_id', $accessToken->id)
            ->update([
                'revoked' => true
            ]);

        if ($accessToken->revoke()) {
            return [
                'message' => 'Logout successfully'
            ];
        }
        return response([
            'message' => 'Logout errors'
        ], 400);
    }

    public function register(RegisterRequest $request)
    {
        $user = new User();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->created_at = Carbon::now();
        $user->updated_at = Carbon::now();

        if ($user->save()) {
            return [
                'message' => 'Register successfully'
            ];
        }
        return response([
            'message' => 'Register errors'
        ], 400);
    }
}
