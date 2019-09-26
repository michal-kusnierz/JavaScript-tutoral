var myString = 'I\'m a "fun ninja" string';
if (myString.indexOf("ninja") === -1){
	console.log("the word ninja is not in the string");
} else{
	console.log("the word ninja starts at position " + myString.indexOf("ninja"));
}