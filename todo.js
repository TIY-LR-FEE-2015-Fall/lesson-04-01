var Todo = function(title, importance) {
  // Configurable
  this.title = title;
  this.importance = importance || 1;

  // Default Values
  this.done = false;
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


// Create instances of Todo
var x = new Todo('Cereal');
var y = new Todo('Milk', 10);
var z = new Todo('Toothpaste', 6);

console.log(y.title);

// Overrides for ONLY `y`
y.thisExists = 'Local';
console.log(y.thisExists);
console.log(z.thisExists);

// Is markComplete share across all Todo instances
console.log(z.markComplete === y.markComplete);

// Mark Complete
x.markComplete();
console.log(x.isDone());
console.log(y.isDone());
