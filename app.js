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
var operation = add;
var display = x;

var newCalculator = function() {
  $('.display').text(display);
};

var inputValue = '';

$('.key').click(function() {
  var val = $(this).text();
  if (val === 'C') {
    inputValue = '';
    return;
  }


  if (val === '+' || val === '-' || val === 'x' || val === '/' || val === '=') {
    if (val === '=') {
      y = parseInt(inputValue);
      x = operation(x, y); // call previous calc operation
      display = x;
      // x = 0;
      // y = 0;
      // operation = add;
      // inputValue = inputValue.toString();

    } else {
      y = parseInt(inputValue);
      x = operation(x, y); // call previous calc operation
      console.log('x', x);
      console.log('y', y);
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

$(document).on('ready', newCalculator());