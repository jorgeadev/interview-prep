const zombies = "242";
const humans = "334";

const battleHorde = (zombies, humans) => {
	zombies = zombies.split("").map(Number);
	humans = humans.split("").map(Number);
	
	let z = 0;
	let h = 0;
	
	for (let i = 0; i < zombies.length; i++) {
		let zombiePower = zombies[i] + z;
		let humanPower = humans[i] + h;
		if (zombiePower > humanPower) {
			z = zombiePower - humanPower;
			h = 0;
		} else if (zombiePower < humanPower) {
			h = humanPower - zombiePower;
			z = 0;
		} else {
			z = 0;
			h = 0;
		}
	}
	
	if (z > h) {
		return `${ z }z`;
	} else if (z < h) {
		return `${ h }h`;
	} else {
		return "x";
	}
};

console.log(battleHorde(zombies, humans));