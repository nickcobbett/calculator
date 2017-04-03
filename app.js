var Calculator = function() {
  this.value = 0; //Calc is initialized with value of 0
  this.operation = this.add;
};

Calculator.prototype.add = function(val) {
  this.value += val;
};

Calculator.prototype.subtract = function(val) {
  this.value -= val;
};

Calculator.prototype.multiply = function(val) {
  this.value *= val;
};

Calculator.prototype.divide = function(val) {
  this.value /= val;
};

Calculator.prototype.equals = function(val) {
  return this.value;
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
  if (val === 'C') {
    inputValue = '';
    return;
  }

  if (val === '+' || val === '-' || val === 'x' || val === '/' || val === '=') {
    inputValue = parseInt(inputValue);
    calc.operation(inputValue); // call previous calc operation
    console.log('calc.value', calc.value);
    // set the operation to be called after next value entered
    if (val === '+') {
      calc.operation = calc.add;
    }
    if (val === '-') {
      calc.operation = calc.subtract;
    }
    if (val === 'x') {
      calc.operation = calc.multiply;
    }
    if (val === '/') {
      calc.operation = calc.divide;
    }
    // this will be different
    if (val !== '=') {
      inputValue = ''; // reset input value once math operator is hit
    } else {
      inputValue = inputValue.toString();
    }

    $('.display').text(calc.value); // display
    console.log('input val', inputValue);
  } else {
    inputValue += val;
    console.log('input val', inputValue);
    $('.display').text(inputValue);
  }

});

$(document).on('ready', newCalculator());