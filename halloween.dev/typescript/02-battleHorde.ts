const zombies = "242";
const humans = "334";

/*function battleHorde(zombies: string, humans: string) {
	let z = 0, h = 0;
	for (let i = 0; i < zombies.length; i++) {
		h += Number(humans[i]);
		z += Number(zombies[i]);
	}
	if (z === h) return "x";
	return `${ Math.abs(z - h) }${ z > h ? "z" : "h" }`;
}*/

/*function battleHorde(zombies: string, humans: string) {
	const z = zombies.split('').reduce((acc, val) => acc + parseInt(val), 0);
	const h = humans.split('').reduce((acc, val) => acc + parseInt(val), 0);
	
	const letter = z > h ? "z" : "h";
	if (z === h) return "x"
	return `${ Math.abs(z - h) }${ letter }`;
}*/

const battleHorde = (zombies: string, humans: string) => {
	let powerDifference: number = 0;
	for (let i = 0; i < zombies.length; i++) {
		powerDifference += Number(zombies[i]) - Number(humans[i]);
	}
	if (powerDifference === 0) {
		return "x";
	} else {
		return `${ Math.abs(powerDifference) }${ powerDifference > 0 ? "z" : "h" }`;
		}
};

console.log(battleHorde(zombies, humans));