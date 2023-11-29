<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventDescription extends Model
{
    use HasFactory;
	
	protected $table = 'event_description';
	
	protected string $description = '';
	const ATTR_DESCRIPTION = 'description';
	
	protected $fillable = [
		self::ATTR_DESCRIPTION,
	];
}
