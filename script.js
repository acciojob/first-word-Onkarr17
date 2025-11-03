function firstWord(s) {
  // your code here
	s= s.trim();
	return s.split(" ")[0];
}

// Do not change the code belo

const s = prompt("Enter String:");
alert(firstWord(s));
