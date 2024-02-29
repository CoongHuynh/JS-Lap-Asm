"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`Tăng tốc thêm 10km/h thành: ${(this.speed += 10)}`);
};

Car.prototype.brake = function () {
  console.log(`Giảm tốc đi 5km/h thành:${(this.speed -= 5)}`);
};

const Huynh = new Car("BMW", 120);
const Nam = new Car("Mercedes", 95);

console.log("Xe của Huynh");
Huynh.accelerate();
Huynh.accelerate();
Huynh.brake();
Huynh.brake();

console.log("\nXe của Nam");
Nam.accelerate();
Nam.accelerate();
Nam.brake();
Nam.brake();
Nam.accelerate();
Nam.brake();

///////////////// Lab 13.2
console.log("\n\nLap 13.2 ------------------------");
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  accelerate() {
    console.log(`Tăng tốc thêm 10km/h thành: ${(this.speed += 10)}`);
  }

  brake() {
    console.log(`Giảm tốc đi 5km/h thành:${(this.speed -= 5)}`);
  }
}

const Huynhcl = new CarCl("BMW", 120);
const Namcl = new CarCl("Mercedes", 95);

console.log("Xe của Huynh");
Huynhcl.accelerate();
Huynhcl.brake();
Huynhcl.brake();
console.log(`Tốc độ hiện tại là: ${Huynhcl.speedUS} meli/h`);
Huynhcl.speedUS = 100;
console.log(Huynhcl);

console.log("\nXe của Nam");
Namcl.accelerate();
Namcl.brake();
console.log(`Tốc độ hiện tại là: ${Namcl.speedUS} meli/h`);
Namcl.speedUS = 250;
console.log(Namcl);

/////////////Lab 13.3
console.log("\n\n Lab 13.3 --------------------");
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return (this.charge = chargeTo);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const electricCar = new EV("Tesla", 120, 23);

console.log(`Mức pin thử nghiêm: ${electricCar.chargeBattery(70)}`);
console.log(electricCar);
electricCar.accelerate();

electricCar.brake();

///////Lab 13.4
console.log("\n\n Lab 13.4 -------------------");
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    return (this.#charge = chargeTo);
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
  }
}

const electricCarCl = new EV("Rivian", 120, 23);
console.log(`Mức pin thử nghiệm: ${electricCarCl.chargeBattery(50)}`);
console.log(electricCarCl);
electricCarCl.accelerate();

electricCarCl.brake();
