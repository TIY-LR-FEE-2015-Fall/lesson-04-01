var Todo = function(title, importance) {
  this.title = title;
  this.done = false;
  this.importance = importance || 1;
  this.dateComplete = null;
};

Todo.prototype.thisExists = 'Hello World';

Todo.prototype.markComplete = function() {
  this.done = true;
  this.dateComplete = new Date();
};

Todo.prototype.isDone = function() {
  if (this.done) {
    return 'Yup';
  }

  return 'Nope';
};

var x = new Todo('Cereal');
var y = new Todo('Milk', 10);
var z = new Todo('Toothpaste', 6);

console.log(y.title);
y.thisExists = 'Local';
console.log(y.thisExists);
console.log(z.thisExists);

// Is markComplete share across all Todo instances
console.log(z.markComplete === y.markComplete);

x.markComplete();
console.log(x.isDone());
console.log(y.isDone());
