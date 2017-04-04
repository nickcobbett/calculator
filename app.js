var add = (x, y) => {
  return x + y;
};
var subtract = (x, y) => {
  return x - y;
};
var multiply = (x, y) => {
  return x * y;
};
var divide = (x, y) => {
  return x / y;
};

var x = 0;
var y = 0;
var result = 0;
var operation = add;
var display = x;
var inputValue = '';

$('.key').click(function() {
  var val = $(this).text();
  if (val === 'C') {
    inputValue = '';
    return;
  }


  if (val === '+' || val === '-' || val === 'x' || val === '/' || val === '=') {
    y = parseInt(inputValue);
    result = operation(x, y); // call previous calc operation
    display = result;
    if (val === '=') {
      inputValue = result;
      x = 0;
      y = 0;
      operation = add;
      // inputValue = inputValue.toString();

    } else {
      x = result;
      y = 0;
      inputValue = ''; // reset input value once math operator is hit
    }
    if (val === '+') { // set the operation to be called after next value entered
      operation = add;
    }
    if (val === '-') {
      operation = subtract;
    }
    if (val === 'x') {
      operation = multiply;
    }
    if (val === '/') {
      operation = divide;
    }

  } else {
    inputValue += val;
    display = inputValue;
  }

  console.log('input val', inputValue);
  console.log('operation', operation.name);
  console.log('x', x);
  console.log('y', y);

  $('.display').text(display);
});

var newCalculator = function() {
  x = 0;
  y = 0;
  operation = add;
  display = x;
  $('.display').text(display);
};

$(document).on('ready', newCalculator());