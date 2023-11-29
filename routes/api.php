<?php
	
	use App\Http\Controllers\Api\AuthController;
	use App\Http\Controllers\Api\DescriptionController;
	use App\Http\Controllers\Api\EventController;
	use App\Http\Controllers\Api\ImageController;
	use Illuminate\Http\Request;
	use Illuminate\Support\Facades\Route;
	
	/*
	|--------------------------------------------------------------------------
	| API Routes
	|--------------------------------------------------------------------------
	|
	| Here is where you can register API routes for your application. These
	| routes are loaded by the RouteServiceProvider within a group which
	| is assigned the "api" middleware group. Enjoy building your API!
	|
	*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->group(function() {
	Route::post('login', 'login');
	Route::post('register', 'register');
	Route::post('check', 'check');
	Route::get('logout', 'logout');
});

Route::apiResource('events', EventController::class);
Route::apiResource('event-images', ImageController::class);
Route::apiResource('event-descriptions', DescriptionController::class);