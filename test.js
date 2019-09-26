var birthday = new Date(1980,3,22, 11,15,25);
var birthday2 = new Date(1980,3,22, 11,15,25);


console.log(birthday.getMonth());
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay());
console.log(birthday.getHours());

console.log(birthday.getTime());
// get the number of milliseconds since 1st Jan 1970


// to compare dates
if(birthday == birthday2){
	console.log("birthdays are equal");
} else{
	console.log("birthdays are not equal");
}

//why are they not equal? because they are different objects, but we can compare Time:

if(birthday.getTime() == birthday2.getTime()){
	console.log("birthdays are equal");
} else{
	console.log("birthdays are not equal");
}
