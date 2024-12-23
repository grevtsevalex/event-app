<?php
	
	use App\Http\Middleware\Authenticate;
	use Illuminate\Support\Facades\Route;
	
	/*
	|--------------------------------------------------------------------------
	| Web Routes
	|--------------------------------------------------------------------------
	|
	| Here is where you can register web routes for your application. These
	| routes are loaded by the RouteServiceProvider within a group which
	| contains the "web" middleware group. Now create something great!
	|
	*/
	
	Route::get('/', function () {
		return view('welcome');
	});
	
	Route::get('/auth', ['as' => 'login', function () {
		return view('welcome');
	}]);
	
	Route::get('/register', function () {
		return view('welcome');
	});
	
	Route::get('/my-events', function () {
		return view('welcome');
	})->middleware(Authenticate::class);
	
	Route::get('/event/{id}', function () {
		return view('welcome');
	});
	
	Route::get('/profile', function () {
		return view('welcome');
	})->middleware(Authenticate::class);
	
	Route::get('/edit-event/{id}', function () {
		return view('welcome');
	})->middleware(Authenticate::class);
	
	Route::get('/create-event', function () {
		return view('welcome');
	})->middleware(Authenticate::class);