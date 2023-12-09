<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * User registration.
     *
     * @param Request $request
     *
     * @return ApiResponse
     */
    public function update(Request $request): ApiResponse {
		$response = new ApiResponse();
        $validator = Validator::make($request->all(), [
            'id'        => 'required|int',
            'name'      => 'string',
            'email'     => 'email',
            'phone'     => 'string',
            'telegram'  => 'string',
            'last_name' => 'string',
        ]);

        if ($validator->fails()) {
            return $response->setContent(false, false, $validator->errors())->setStatusCode(400);
        }

        try {
            $userId = $request->input('id');
			$user = User::findOrFail($userId);
			
			foreach ($request->all() as $item => $value) {
				$user->{$item} = $value;
			}
			
			$user->save();
        }
        catch(\Throwable) {
			return $response->setContent(false, false, 'User is not been updated')->setStatusCode(400);
        }

        return $response->setContent(true, true, 'User updated successfully');
    }
}
