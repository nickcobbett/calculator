var Calculator = function() {
  this.value = 0; //Calc is initialize with value of 0
  this.operation = null;

  this.add = this.add.bind(this);
  // this.subtract = this.subtract.bind(this);
  // this.multiply = this.multiply.bind(this);
  // this.divide = this.divide.bind(this);
  this.equals = this.equals.bind(this);
  // this.execute = this.execute.bind(this);
  // this.update = this.update.bind(this);
};



//on add click, you're adding to initial val

Calculator.prototype.add = function(val) {
  this.value += val;
  this.operation = this.add;
  return this.value;
};

Calculator.prototype.equals = function(val) {
  this.operation.call(this, val);
  // return this.value;
};

var calc = new Calculator();

var newCalculator = function() {
  calc = new Calculator();
  console.log('calc', calc);
  $('.display').text(calc.value);
  return calc;
};

var inputValue = '';


$('.key').click(function() {
  var val = $(this).text();
  if (val === 'C') { return; }
  if (val === 'x') {
    val = '*';
  }



  if (val === '+' || val === '-' || val === '*' || val === '/' || val === '=') {
    inputValue = parseInt(inputValue);
    if (val === '+') {
      calc.add(inputValue);
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
      calc.equals(inputValue);
    }
    console.log(calc.value);
    $('.display').text(calc.value);

    inputValue = '';
  } else {

    inputValue += val;
    $('.display').text(inputValue);
  }



  // if (val === '=') {
  //   console.log('operation', calc.operation);
  //   calc.operation();

    // $('.display').text(calc.result);
    // console.log(calc.result);
    // return;
  // }

  // console.log(val);
  // calc.currentValue += val;

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