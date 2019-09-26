var myCar2 = {

    maxSpeed: 70, 
	driver: "Net Ninja", 
	drive: function(speed, time){
		console.log(speed * time);
    },
    test: function(){
        console.log(this);
    }

};


console.log(myCar2.maxSpeed);
myCar2.drive(50,3); 
myCar2.test();