const potions = [1, 4, 3, 6];
const goal = 7;

/*function createMagicPotion(potions: number[], target: number) {
	let solutions: [number, number][] = [];
	for (let i = 0; i < potions.length; i++) {
		const comp = target - potions[i];
		const index = potions.indexOf(comp);
		if (potions.includes(comp) && index > i) {
			solutions.push([ i, index ]);
		}
	}
	if (solutions.length === 1) {
		return solutions[0];
	} else if (solutions.length > 1) {
		let minIndex = potions.length;
		solutions.forEach((solution) => {
			if (solution[1] < minIndex) {
				minIndex = solution[1];
			}
		});
		return solutions.find((solution: number[]) => solution[1] === minIndex);
	}
}*/

/*function createMagicPotion(potions: number[], target: number) {
	const solutions: [number, number][] = [];
	const potionMap = new Map<number, number>();
	
	for (let i = 0; i < potions.length; i++) {
		const comp = target - potions[i];
		if (potionMap.has(comp)) {
			solutions.push([potionMap.get(comp)!, i]);
		}
		potionMap.set(potions[i], i);
	}
	
	if (solutions.length === 1) {
		return solutions[0];
	} else if (solutions.length > 1) {
		return solutions.reduce((minSolution, solution) =>
			solution[1] < minSolution[1] ? solution : minSolution
		);
	}
}*/

function createMagicPotion(potions: number[], target: number) {
	const potionMap = new Map<number, number>();
	
	for (let i = 0; i < potions.length; i++) {
		const comp = target - potions[i];
		if (potionMap.has(comp)) 
			return [potionMap.get(comp)!, i];
		
		potionMap.set(potions[i], i);
		console.log(potionMap);
	}
}

console.log(createMagicPotion(potions, goal)); // [1, 2]