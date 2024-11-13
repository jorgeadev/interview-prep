const accounts = [[2,8,7],[7,1,3],[1,9,5]];

/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts: number[][]): number {
	/*let max = 0;
	for (let i = 0; i < accounts.length; i++) {
		let sum = 0;
		for (let j = 0; j < accounts[i].length; j++)
			sum += accounts[i][j];
		max = Math.max(max, sum);
	}
	return max;*/
	
	return Math.max(...accounts.map(account => account.reduce((acc, curr) => acc + curr, 0)));
};

console.log(maximumWealth(accounts)); // 17