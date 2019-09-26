var Car = function(maxSpeed, driver){

	this.maxSpeed = maxSpeed;	
	this.driver = driver;
	this.drive = function(speed, time){
		console.log(speed * time);
	};
	this.logDriver = function(){
		console.log("driver name is " + this.driver);
	};
}

var myCar = new Car (40, "Ninja Man");
var myCar2 = new Car (10, "Humpty Dumpty");
var myCar3 = new Car (50, "Shaun");
var myCar4 = new Car (100, "James Bond");

myCar.drive(30,5);
myCar3.logDriver();