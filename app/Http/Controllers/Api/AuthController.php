<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * User registration.
     *
     * @param Request $request
     *
     * @return string
     */
    public function register(Request $request): string {
        $validator = Validator::make($request->all(), [
            'name'       => 'required',
            'email'      => 'required|email',
            'password'   => 'required',
            'c_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            $response = [
                'success' => false,
                'message' => $validator->errors(),
            ];

            return response()->json($response, 400);
        }

        $input             = $request->all();
        $input['password'] = bcrypt($input['password']);

        try {
            $user = User::create($input);
        }
        catch(\Throwable) {
            return response()->json([
                'success' => false,
                'message' => 'User is not been created'
            ], 400);
        }

        $data['token'] = $user->createToken('us-tok-el')->plainTextToken;
        $data['name']  = $user->name;

        $response = [
            'success' => true,
            'data'    => $data,
            'message' => 'User register successfully',
        ];

        return response()->json($response, 200);
    }

    /**
     * Login user.
     *
     * @param Request $request
     *
     * @return string
     */
    public function login(Request $request): string {
        if (false === Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            return response()->json([
                'success' => false,
                'message' => 'Unauthorized'
            ], 400);
        }

        $user = $request->user();
        $data['token'] = $user->createToken('bel')->plainTextToken;
        $data['name']  = $user->name;

        $response = [
            'success' => true,
            'data'    => $data,
            'message' => 'User login successfully',
        ];

        return response()->json($response, 200);
    }
}
