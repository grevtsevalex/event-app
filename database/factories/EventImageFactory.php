<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventImageFactory extends Factory
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
			'url' => fake()->imageUrl,
			'created_at' => $startDate->format('Y-m-d H:i:s'),
			'updated_at' => $endDate->format('Y-m-d H:i:s'),
		];
    }
}
