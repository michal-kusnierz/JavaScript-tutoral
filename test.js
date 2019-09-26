var myCar2 = {
	maxSpeed: 70, 
	driver: "Net Ninja", 
	drive: function(speed, time){
		console.log(speed * time);
	},
	logDriver: function(){
		console.log("driver name is " + this.driver);
	}
};

console.log(myCar2.maxSpeed);
myCar2.drive(50,3);
myCar2.logDriver();