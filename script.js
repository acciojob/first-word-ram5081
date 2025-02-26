function firstWord(s) {
  // your code here
	str = str.trim();

	let index = str.indexof(" ");

	return index === -1 ? str : str.slice(0,index);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
