//part 1

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

honk() {
    return "Beep";
}

toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}.`;
}
}

let myFirstVehicle = new vehicle("Honda", "CR-V", 1998)

//part 2

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//part 3

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
    return "Vroooooom";
    }
}

//part 4

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
add(newVehicle) {
    if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
    }
    if (!(newVehicle instanceof vehicle)) {
        return "Only vehicles are allowed here!";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
}
}