/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
const runningSum = function (nums: number[]): number[] {
	let sum = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		sum.push(sum[i -1] + nums[i]);
	}
	return sum;
};
*/

const runningSum = (nums: number[]): number[] => {
	return nums.reduce((acc, curr, index) => acc.concat(acc[index] + curr), [0]).slice(1);
};



console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10]