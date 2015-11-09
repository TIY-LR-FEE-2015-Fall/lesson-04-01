var Todo = function(title, importance) {
  this.title = title;
  this.done = false;
  this.importance = importance || 1;
  this.dateComplete = null;

  this.markComplete = function() {
    this.done = true;
    this.dateComplete = new Date();
  };
};

var x = new Todo('Cereal');
var y = new Todo('Milk', 10);
var z = new Todo('Toothpaste', 6);

console.log(y.title);
x.markComplete();
console.log(z.title);
console.log(z.done);
console.log(x.done);
