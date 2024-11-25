<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * User registration.
     *
     * @param Request $request
     *
     * @return ApiResponse
     */
    public function register(Request $request): ApiResponse {
		$response = new ApiResponse();
        $validator = Validator::make($request->all(), [
            'name'       => 'required',
            'email'      => 'required|email',
            'password'   => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $response->setContent(false, false, $validator->errors())->setStatusCode(400);
        }

        $input             = $request->all();
        $input['password'] = bcrypt($input['password']);

        try {
            $user = User::create($input);
        }
        catch(\Throwable) {
			return $response->setContent(false, false, 'User is not been created')->setStatusCode(400);
        }

        $data['token'] = $user->createToken('us-tok-el')->plainTextToken;
        $data['id'] = $user->id;

        return $response->setContent($data, true, 'User register successfully');
    }

    /**
     * Login user.
     *
     * @param Request $request
     *
     * @return ApiResponse
     */
    public function login(Request $request): ApiResponse {
		$response = new ApiResponse();
        if (false === Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return $response->setContent(false, false, 'Unauthorized')->setStatusCode(400);
        }

        $user = $request->user();
        $data['token'] = $user->createToken('bel')->plainTextToken;
        $data['id']  = $user->id;

        return $response->setContent($data, true, 'User login successfully');
    }
	
	/**
	 * Check user is auth.
	 *
	 * @param Request $request
	 *
	 * @return ApiResponse
	 */
	public function check(Request $request): ApiResponse {
		$user = auth()->user(); // Проверяем пользователя
		return (new ApiResponse())->setContent($user ? true : false, true, $user ? 'User authenticated' : 'Unauthenticated')->setStatusCode($user ? 200 : 401);
	}
	
	/**
	 * Log the user out of the application.
	 *
	 * @param Request $request
	 *
	 * @return ApiResponse
	 */
	public function logout(Request $request): ApiResponse
	{
		Auth::logout();
		
		$request->session()->invalidate();
		
		$request->session()->regenerateToken();
		
		return (new ApiResponse())->setContent(true);
	}
}
