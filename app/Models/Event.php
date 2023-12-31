<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Event
 *
 * @property int $id
 * @property string $title
 * @property string $date_time
 * @property string $address
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Event newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Event query()
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereDateTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Event whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Event extends Model
{
    use HasFactory;
	
	const ATTR_ID = 'id';
	const ATTR_TITLE = 'title';
	const ATTR_DATE_TIME = 'date_time';
	const ATTR_ADDRESS = 'address';
	const ATTR_IMAGE_ID = 'image_id';
	const ATTR_DESCRIPTION_ID = 'description_id';
	const ATTR_AUTHOR_ID = 'author_id';
	
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		self::ATTR_TITLE,
		self::ATTR_DATE_TIME,
		self::ATTR_ADDRESS,
		self::ATTR_IMAGE_ID,
		self::ATTR_DESCRIPTION_ID,
		self::ATTR_AUTHOR_ID,
	];
}
