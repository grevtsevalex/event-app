<?php

namespace App\Models;
	
use Illuminate\Http\Response;
	
class ApiResponse extends Response
{
	public function setContent(mixed $content, bool $status = true, mixed $message = ''): static
	{
		$data = [
			'success' => $status,
			'data'    => $content,
			'message' => $message
		];
			
		return parent::setContent($data);
	}
}