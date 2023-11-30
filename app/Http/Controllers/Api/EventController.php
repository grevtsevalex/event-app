<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ApiResponse;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Throwable;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ApiResponse
     */
    public function index(): ApiResponse
    {
        $response = new ApiResponse();
		try {
			$events = Event::all();
			return $response->setContent($events)->setStatusCode(200);
		}
		catch (Throwable $e) {
			return $response->setContent(null, false, $e->getMessage())->setStatusCode(500);
		}
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return ApiResponse
     */
    public function store(Request $request): ApiResponse
    {
		$response = new ApiResponse();
		$validator = Validator::make($request->all(), [
			Event::ATTR_TITLE     => 'required|string',
			Event::ATTR_ADDRESS   => 'required|string',
			Event::ATTR_DATE_TIME => 'required|date',
		]);
		
		if ($validator->fails()) {
			return $response->setContent(null, false, $validator->errors())->setStatusCode(400);
		}
		
		$input = $request->all();
		
		try {
			$event = Event::create($input);
		}
		catch(Throwable) {
			return $response->setContent(null, false, 'Event is not been created')->setStatusCode(400);
		}
		
		return $response->setContent(['id' => $event->id], true, 'Event created successfully')->setStatusCode(200);
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
			$event = Event::find($id);
			return $response->setContent($event)->setStatusCode($event === null ? 404 : 200);
		}
		catch (Throwable $e) {
			return $response->setContent(null, false, $e->getMessage())->setStatusCode(400);
		}
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return ApiResponse
     */
    public function update(Request $request, int $id): ApiResponse
    {
		$response = new ApiResponse();
		$validator = Validator::make($request->all(), [
			Event::ATTR_TITLE     => 'string',
			Event::ATTR_ADDRESS   => 'string',
			Event::ATTR_DATE_TIME => 'date',
			Event::ATTR_IMAGE_ID => 'int',
			Event::ATTR_DESCRIPTION_ID => 'int',
		]);
		
		if ($validator->fails()) {
			return $response->setContent(null, false, $validator->errors())->setStatusCode(400);
		}
		
		$input = $request->all();
		
		try {
			$event = Event::find($id)->update($input);
		}
		catch(Throwable) {
			return $response->setContent(null, false, 'Event is not been updated')->setStatusCode(400);
		}
		
		return $response->setContent($event, true, 'Event updated successfully')->setStatusCode(200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return ApiResponse
     */
    public function destroy(int $id): ApiResponse
    {
		$response = new ApiResponse();
		
		try {
			Event::destroy($id);
		}
		catch(Throwable) {
			return $response->setContent(null, false, 'Event is not been deleted')->setStatusCode(400);
		}
		
		return $response->setContent(true, true, 'Event delete successfully')->setStatusCode(200);
    }
	
	/**
	 * Get events by author_id.
	 *
	 * @param  int $authorId
	 * @return ApiResponse
	 */
	public function getByAuthorId(int $authorId): ApiResponse {
		$response = new ApiResponse();
		
		try {
			$events = Event::where(Event::ATTR_AUTHOR_ID, $authorId)->orderBy(Event::ATTR_DATE_TIME)->get();
			return $response->setContent($events)->setStatusCode(200);
		}
		catch(Throwable) {
			return $response->setContent([])->setStatusCode(500);
		}
	}
}
