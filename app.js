var Calculator = function() {
  this.previousValue = 0;
  this.currentValue = 0;
  this.result = 0;
  this.values = [];
  this.operations = [];

  this.add = this.add.bind(this);
  // this.subtract = this.subtract.bind(this);
  // this.multiply = this.multiply.bind(this);
  // this.divide = this.divide.bind(this);
  this.equals = this.equals.bind(this);
  this.execute = this.execute.bind(this);
  this.update = this.update.bind(this);



};

Calculator.prototype.execute = function() {
  console.log('execute called');
  this.operations.shift()();
  this.values = [this.result];
};

Calculator.prototype.update = function() {
  if (this.operations.length === 2) {
    console.log('operations.length === 2');
    this.execute();
    console.log(this.result);
  }

  console.log(this.operations[0] === this.equals);
  console.log(this.operations[0]);
  if (this.operations[0] === this.equals) {
    this.currentValue = this.result;
    this.values = [];
    this.operations = [];
  }
};

Calculator.prototype.add = function() {
  this.result = this.values[0] + this.values[1];
  return this.result;
};

Calculator.prototype.equals = function() {
  this.values = [this.result];
  this.operations = [];
  return this.result;
};

var calc = new Calculator();
var add = calc.add;
var equals = calc.equals;



var newCalculator = function() {
  calc = new Calculator();
  console.log('calc', calc);
  $('.display').text(calc.result);
  return calc;
};


$('.key').click(function() {
  var val = $(this).text();
  if (val === 'C') { return; }
  if (val === 'x') {
    val = '*';
  }

  if (typeof val !== 'number') {
    calc.values.push(calc.currentValue);
  }

  if (val === '+' || val === '-' || val === '*' || val === '/' || val === '=') {
    if (val === '+') {
      calc.operations.push(add);
    }
    if (val === '-') {
      calc.operation = calc.subtract;
    }
    if (val === '*') {
      calc.operation = calc.multiply;
    }
    if (val === '/') {
      calc.operation = calc.divide;
    }
    if (val === '=') {
      calc.operations.push(equals);
    }

    // calc.previousValue = calc.currentValue;
    calc.currentValue = 0;
  }


  // if (val === '=') {
  //   console.log('operation', calc.operation);
  //   calc.operation();

    // $('.display').text(calc.result);
    // console.log(calc.result);
    // return;
  // }

  // console.log(val);
  calc.currentValue += val;
  $('.display').text(calc.currentValue);
});

// $('.display').text(calc.currentValue);
$(document).on('ready', newCalculator());


// Calculator.prototype.subtract = function() {
//   this.result = this.previousValue - this.currentValue;
//   return this.result;
// };

// Calculator.prototype.multiply = function() {
//   this.result = this.previousValue * this.currentValue;
//   return this.result;
// };

// Calculator.prototype.divide = function() {
//   this.result = this.previousValue / this.currentValue;
//   return this.result;
// };

// Calculator.prototype.equals = function() {
//   // this.result = this.previousValue + this.currentValue;
//   this.previousValue += this.currentValue;
//   this.currentValue = 0;
//   return this.previousValue;
// };



// Calculator.prototype.add = function(...vals) {
//   var sum = vals.reduce((prev, next) => {
//     return prev + next;
//   }, this.result);
//   this.result = sum;
//   return this.result;
// };

// Calculator.prototype.subtract = function(...vals) {
//   var difference = vals.reduce((prev, next) => {
//     return prev - next;
//   }, this.result);
//   this.result = difference;
//   return this.result;
// };

// Calculator.prototype.multiply = function(...vals) {
//   var product = vals.reduce((prev, next) => {
//     return prev * next;
//   }, this.result);
//   this.result = product;
//   return this.result;
// };

// Calculator.prototype.divide = function(...vals) {
//   var sum = vals.reduce((prev, next) => {
//     return prev / next;
//   }, this.result);
//   this.result = sum;
//   return this.result;
// };

// Calculator.prototype.clear = function() {
//   this.result = 0;
//   return this.result;
// };