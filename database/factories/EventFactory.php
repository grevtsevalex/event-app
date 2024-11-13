<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
		$startDate = $this->faker->dateTimeThisMonth();
		$endDate = $startDate->add(new \DateInterval('PT1H'));
		return [
			'id' => fake()->unique()->randomNumber(),
			'title' => fake()->words(3, true),
			'date_time' => $startDate->format('Y-m-d H:i:s'),
			'description_id' => EventDescriptionFactory::new()->create()->id,
			'image_id' => EventImageFactory::new()->create()->id,
			'address' => fake()->address(),
			'author_id' => UserFactory::new()->create()->id,
			'created_at' => $startDate->format('Y-m-d H:i:s'),
			'updated_at' => $endDate->format('Y-m-d H:i:s'),
		];
    }
}
