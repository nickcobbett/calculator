var Calculator = function() {
  this.value = 0; //Calc is initialized with value of 0
  this.operation = this.add; //default operator is add

  this.add = this.add.bind(this);
  this.subtract = this.subtract.bind(this);
  this.multiply = this.multiply.bind(this);
  this.divide = this.divide.bind(this);
  this.equals = this.equals.bind(this);
};

Calculator.prototype.add = function(val, operator) { //on add click, you're adding to initial val
  if (operator === '-') {
    this.value -= val;
    this.operation = this.subtract;
  } else {
    this.value += val;
    this.operation = this.add;
  }
  return this.value;

};

Calculator.prototype.subtract = function(val) {
  // this.add.call(this, val, '-');
  this.value = this.value - val;
  this.operation = this.subtract;
};

Calculator.prototype.multiply = function(val) {
  this.value *= val;
  this.operation = this.multiply;
  return this.value;
};

Calculator.prototype.divide = function(val) {
  this.value /= val;
  this.operation = this.divide;
  return this.value;
};

Calculator.prototype.equals = function(val) {
  this.operation.call(this, val);
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
    calc.operation(inputValue); // call previous calc operation and set new one to be add

    // set the operation to be called
    if (val === '+') {
      // calc.add(inputValue);
      calc.operation = calc.add;
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
      calc.operation = calc.equals;
    }

    $('.display').text(calc.value); //display

    inputValue = ''; // reset input value once math operator is hit
  } else {

    inputValue += val;
    $('.display').text(inputValue);
  }

});

$(document).on('ready', newCalculator());