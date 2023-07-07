function makeCar(acceleration, braking) {
  return {
    speed: 0,
    acceleration,
    braking,

    accelerate() {
      this.speed += this.acceleration;
    },

    brake() {
      this.speed -= this.braking;

      if (this.speed < 0) this.speed = 0;
    },
  };
}

let hatchback = makeCar(9, 3);

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
