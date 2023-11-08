<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ImageController extends Controller
{
	// Store Image
	public function store(Request $request)
	{
		$request->validate([
			'image' => 'required|image|mimes:png,jpg,jpeg|max:2048'
		]);
		
		$imageName = time().'.'.$request->image->extension();
		
		// Public Folder
		$request->image->move(public_path('images'), $imageName);
		$url = url('images', $imageName);
		
		// save url to DB
		
		return back()->with('success', 'Image uploaded Successfully!')
			->with('image', $imageName);
	}
}
