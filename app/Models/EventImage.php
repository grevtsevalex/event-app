<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventImage extends Model
{
    use HasFactory;
	
	protected $table = 'event_images';
	
	protected string $url = '';
	const ATTR_URL = 'url';
	
	protected $fillable = [
		self::ATTR_URL,
	];
}
