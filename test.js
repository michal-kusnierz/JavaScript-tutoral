var myCar = new Object(); 	//created new object
myCar.maxSpeed = 50;		//assign new properties
myCar.driver = "Shaun";		

console.log(myCar.driver);  //"Shaun"

myCar.drive = function(){console.log("now driving");}
;

// to call a function:
myCar.drive();

  /* short-hand to create an Object:
var myCar2 = {maxSpeed: 70, driver: "Net Ninja", drive: function(){console.log("now driving again");} };

console.log(myCar2.driver);
console.log(myCar2.maxSpeed);
myCar2.drive();
  */

var myCar2 = 
	{maxSpeed: 70, 
	driver: "Net Ninja", 
	drive: function(speed, time){
		console.log(speed * time);
	}
};
console.log(myCar2.maxSpeed);
myCar2.drive(50,3); 
    // return answer 'how many km we drive with speed '50' and in time '3'
