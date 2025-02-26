function firstWord(s) {
  // your code here
	if (str.length === 0) return ""; // Handle empty string case

    let index = str.indexOf(" ");
    
    return index === -1 ? str : str.slice(0, index); 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
