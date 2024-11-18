const dream = [
	[1, 3, 1],
	[1, 5, 1],
	[4, 2, 1],
];

function findSafestPath(dream: number[][]) {
	const rowsNumber = dream.length;
	const colsNumber = dream[0].length;
	const dangersLevels = [];
	dangersLevels[0] = dream[0][0];
	for (let i = 1; i < colsNumber; i++) 
		dangersLevels[i] = dangersLevels[i - 1] + dream[0][i];
	
	for (let i = 1; i < rowsNumber; i++) {
		dangersLevels[0] += dream[i][0];
		for (let j = 1; j < colsNumber; j++) 
			dangersLevels[j] = Math.min(dangersLevels[j - 1], dangersLevels[j]) + dream[i][j];
		
	}
	return dangersLevels[colsNumber - 1];
}

console.log(findSafestPath(dream));