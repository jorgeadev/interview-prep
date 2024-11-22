const potions = [1, 4, 3, 6];
const goal = 7;

/*function createMagicPotion(potions, goal) {
	let probabilities = [];
	
	for (let i = 0; i < potions.length; i++) {
		for (let j = i + 1; j < potions.length; j++) {
			if (potions[i] + potions[j] === goal) {
				probabilities.push([i, j]);
			}
		}
	}
	
	let minimum = potions.length;
	let result = [];
	for (let i = 0; i < probabilities.length; i++) {
		if (probabilities[i].length < minimum) {
			minimum = probabilities[i][1];
			result = probabilities[i];
		}
	}
	
	return result;
}*/

function createMagicPotion(potions, goal) {
	const complement = {};
	for (let i = 0; i < potions.length; i++) {
		const currentElement = potions[i];
		const difference = goal - currentElement;
		if (complement[currentElement] !== undefined) {
			return [complement[currentElement], i];
		}
		complement[difference] = i;
	}
	return undefined;
}

console.log(createMagicPotion(potions, goal));