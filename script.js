// problem1

let car = {
    color:"red",
    manufacturer:"toyota",
    model:"rav4",
    engine:"2.5",
};

console.log(car.model);
console.log(car.color);


// problem2

console.log(car);
delete car.engine;
console.log(car);

console.log(car);
car.owner = "giorgi";
console.log(car);



// problem3

let names = ["gio", "salo", "mero", "jasper", "sandro"];

console.log(names[2]);

console.log(names);
names.push("cucalia");


console.log(names);
names.shift();
console.log(names);