var Todo = function(title, importance) {
  // Configurable
  this.title = title;
  this.importance = importance || 1;

  // Default Values
  this.done = false;
  this.dateComplete = null;
};

Todo.prototype.exists = 'Hello World';

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

var WorkTodo = function(title, floor) {
  // Run the Todo constructor with the current context `this`
  Todo.call(this, title, 100);
  this.floor = floor;

  // Same just using `apply`
  // Todo.apply(this, [title, 100]);
};

// Inherit from the Todo prototype
WorkTodo.prototype = Object.create(Todo.prototype);

// Overwrite `isDone` for WorkTodo instances
WorkTodo.prototype.isDone = function() {
  if (this.done) {
    return 'Yup';
  }

  return `Yeah... I'm gonna need you to come in on Saturday...`;
};

// Create instances of Todo
var x = new Todo('Cereal');
var y = new Todo('Milk', 10);
var z = new Todo('Toothpaste', 6);
var a = new WorkTodo('Get Stapler', 20);
console.log(a.title);
console.log(a.importance);
console.log(a.isDone());

console.log(y.title);

// Overrides for ONLY `y`
y.exists = 'Local';
console.log(y.exists);
console.log(z.exists);

// Is markComplete share across all Todo instances
console.log(z.markComplete === y.markComplete);

// Mark Complete
x.markComplete();
console.log(x.isDone());
console.log(y.isDone());
