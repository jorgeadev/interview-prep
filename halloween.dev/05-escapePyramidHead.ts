/*const room = [
	[".", ".", "#", ".", "▲"],
	["#", ".", "#", ".", "#"],
	[".", ".", ".", ".", "."],
	["#", "#", "#", ".", "#"],
	["T", ".", ".", ".", "."],
];*/

const room2 = [
	["T", ".", "#", "."],
	[".", ".", ".", "."],
	["▲", ".", ".", "#"],
	[".", "#", "#", "#"],
];

/*
const room3 = [
	["#", "#", "#"],
	["▲", ".", "#"],
	[".", "#", "T"],
];
*/


function escapePyramidHead(room: string[][]) {
	const n = room.length;
	let start: [number, number] = [0, 0];
	let target: [number, number] = [0, 0];
	for (let i = 0; i < n; i++) 
		for (let j = 0; j < n; j++) {
			if (room[i][j] === "▲") start = [i, j];
			if (room[i][j] === "T") target = [i, j];
		}
	
	
	const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
	
	// BFS
	const queue: [number, number, number][] = [[...start, 0]];
	const visited = new Set([`${ start[0] }_${ start[1] }`]);
	while (queue.length > 0) {
		const item = queue.shift();
		if (!item) continue;
		const [x, y, steps] = item;
		if (x === target[0] && y === target[1]) return steps;
		for (const [dx, dy] of directions) {
			const nx = x + dx;
			const ny = y + dy;
			if (nx >= 0 && nx < n && ny >= 0 && ny < n && room[nx][ny] !== "#" && !visited.has(`${ nx }_${ ny }`)) {
				queue.push([nx, ny, steps + 1]);
				visited.add(`${ nx }_${ ny }`);
			}
		}
	}
	return -1;
}

console.log(escapePyramidHead(room2));