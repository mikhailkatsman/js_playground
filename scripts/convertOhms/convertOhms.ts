export function decodedResistorValue(i: string[]) {
	const num: number = COLORS.indexOf(i[0]) + COLORS.indexOf(i[1]);
	var fullNum: number = parseInt(num + "0".repeat(COLORS.indexOf(i[2])));

    return fullNum;
}

export const COLORS = [
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
];
