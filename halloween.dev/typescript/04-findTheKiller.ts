// const whisper = "d~~~~~a";
// const suspects = ["Dracula", "Freddy Krueger", "Jason Voorhees", "Michael Myers"];

// const whisper2 = "~r~dd~";
// const suspects2 = ["Freddy", "Freddier", "Fredderic"];

const whisper3 = "~r~dd$";
const suspects3 = ["Freddy", "Freddier", "Fredderic"];

// const whisper4 = "mi~~def";
// const suspects4 = ["Midudev", "Midu", "Madeval"];

function findTheKiller(whisper: string, suspects: string[]) {
	const endsWithSymbol = whisper.endsWith("$");
	
	const baseWhisper = endsWithSymbol ? whisper.slice(0, -1) : whisper;
	
	const wildcardWhisper = baseWhisper.replaceAll("~", ".");
	const basePattern = `^${ wildcardWhisper }`;
	const endOfPattern = endsWithSymbol ? "$" : ".*$";
	const completePattern = new RegExp(`${ basePattern }${ endOfPattern }`, "i");
	
	const matchingSuspects = suspects.filter(suspect => completePattern.test(suspect));
	
	return matchingSuspects.join(",");
}

/*function findTheKiller(whisper: string, suspects: string[]) {
	const normalizedWhisper = whisper.toLowerCase();
	const isExactMatch = whisper.endsWith("$");
	
	const matchPattern = (suspect: string) => {
		const normalizedSuspect = suspect.toLowerCase();
		const whisperToUse = isExactMatch ? normalizedWhisper.slice(0, -1) : normalizedWhisper;
		
		if (isExactMatch && whisperToUse.length !== normalizedSuspect.length) return false;
		
		return [...whisperToUse].every((char, index) => {
			return char === "~" || char === normalizedSuspect[index];
		});
	};
	
	const matchingSuspects = suspects.filter(matchPattern);
	
	return matchingSuspects.join(",");
}*/

console.log(findTheKiller(whisper3, suspects3)); // Output: Dracula