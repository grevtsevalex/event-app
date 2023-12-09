<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use App\Models\Event;
use App\Models\EventImage;
use Illuminate\Http\Request;

class ImageController extends Controller
{
	// Store Image
	public function store(Request $request): ApiResponse
	{
		$request->validate([
			'image' => 'required|image|mimes:png,jpg,jpeg|max:2048'
		]);
		
		$imageName = time().'.'.$request->image->extension();
		// Public Folder
		$request->image->move(public_path('images'), $imageName);
		$url = url('images', $imageName);
		
		$image = new EventImage();
		$image->url = $url;
		$image->save();
		$imageId = $image->getQueueableId();
		
		return (new ApiResponse())->setContent(['id' => $imageId, 'url' => $url]);
	}
	
	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return ApiResponse
	 */
	public function show(int $id): ApiResponse
	{
		$response = new ApiResponse();
		try {
			$event = EventImage::find($id);
			return $response->setContent($event)->setStatusCode($event === null ? 404 : 200);
		}
		catch (Throwable $e) {
			return $response->setContent(null, false, $e->getMessage())->setStatusCode(400);
		}
	}
}
