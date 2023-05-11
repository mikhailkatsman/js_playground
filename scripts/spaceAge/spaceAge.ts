function age(planet: string, seconds: number): number {
	const earthYear: number = 31557600
	const orbitalPeriod: { [key: string]: number } = {
		mercury: 0.2408467,
		venus: 0.61519726,
		earth: 1.0,
		mars: 1.880815,
		jupiter: 11.862615,
		saturn: 29.447498,
		uranus: 84.016846,
		neptune: 164.79132,
	}

	return +(seconds / (earthYear * orbitalPeriod[planet])).toFixed(2)
}
