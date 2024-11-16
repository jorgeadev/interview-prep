const n = 35;

/**
 * @param {number} n
 * @return {string[]}
 */
/*const fizzBuzz = function(n: number): string[] {
	let result: string[] = [];
	
	for (let i = 1; i <= n; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			result.push("FizzBuzz");
		} else if (i % 3 === 0) {
			result.push("Fizz");
		} else if (i % 5 === 0) {
			result.push("Buzz");
		} else {
			result.push(i.toString());
		}
	}
	
	return result;
};*/

const fizzBuzz = function(n: number): string[] {
	return Array.from({length:n}, (_,i) => {
		i++;
		let str ="";
		if(i%3 ===0) str+="Fizz";
		if(i%5 ===0) str+="Buzz";
		return str || String(i);
	});
};

console.log(fizzBuzz(n)); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]