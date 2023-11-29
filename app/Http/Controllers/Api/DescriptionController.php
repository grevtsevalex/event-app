<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use App\Models\EventDescription;
use Illuminate\Http\Request;

class DescriptionController extends Controller
{
	// Store Image
	public function store(Request $request): ApiResponse
	{
		$request->validate([
			'description' => 'required|string'
		]);
		
		$description = new EventDescription();
		$description->description = html_entity_decode($request->description);
		$description->save();
		
		$descriptionId = $description->getQueueableId();
		
		return (new ApiResponse())->setContent($descriptionId);
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
			$event = EventDescription::find($id);
			return $response->setContent($event)->setStatusCode($event === null ? 404 : 200);
		}
		catch (Throwable $e) {
			return $response->setContent(null, false, $e->getMessage())->setStatusCode(400);
		}
	}
}
