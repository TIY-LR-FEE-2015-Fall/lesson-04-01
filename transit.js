function MotorTransit(mpg, speed, gasCapacity) {
  this.mpg = mpg;
  this.speed = speed;
  this.gasCapacity = gasCapacity;
}

MotorTransit.prototype.drive = function(hours) {
  // How many miles to go
  var distance = hours * this.speed;

  // How many gallons will that use
  var requiredGas = distance / this.mpg;

  // Can I drive that far with current gas
  if (this.gasCapacity < requiredGas) {
    throw 'Not enough gas';
  }

  // Remove gas
  this.gasCapacity -= requiredGas; // this.gasCapacity = this.gasCapacity - requiredGas;
  return distance;
};

function Car(mpg, gasCapacity, doors, seats) {
  this.doors = doors;
  this.seats = seats;

  // MotorTransit.call(this, mpg, 70, gasCapacity);
  MotorTransit.apply(this, [mpg, 70, gasCapacity]);
}

Car.prototype = Object.create(MotorTransit.prototype);

/**
 * Same as drive but add an extra hour
 * @param  {number} hours Number of hours to drive
 * @return {number}       Number of miles traveled
 */
Car.prototype.zoomZoom = function(hours) {
  return MotorTransit.prototype.drive.call(this, hours + 1);
};

var mazda = new Car(40, 10, 5, 5);

console.log(mazda.zoomZoom(4));
