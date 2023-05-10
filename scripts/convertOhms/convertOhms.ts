function decodedResistorValue(i: string[]) {
	const num: string = COLORS.indexOf(i[0]).toString() + COLORS.indexOf(i[1]).toString()
	var fullNum: number = parseInt(`${num}${"0".repeat(COLORS.indexOf(i[2]))}`)

	const metric = [
		{ divider: 1e9 , suffix: ' giga' },
		{ divider: 1e6 , suffix: ' mega' },
		{ divider: 1e3 , suffix: ' kilo' },
	]

	var ohms: string = fullNum + " ohms"

	for (var j = 0; j < metric.length; j++) {
		if (fullNum >= metric[j].divider) {
			ohms = (fullNum / metric[j].divider).toString() + metric[j].suffix + "ohms"
			break
		}
	}

	return ohms
}

const COLORS = [
	"black",
	"brown",
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"violet",
	"grey",
	"white",
]

console.debug(decodedResistorValue(["brown", "orange", "red"]))
