var cars = {
    name : "Tesla",
    brand : "X",
    start : function () {
        console.log("Car started");
    },
    drive : function () {
        console.log("Driving started");
    }
};

cars.start();
cars.drive();
console.log(cars.name);