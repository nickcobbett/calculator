var Calculator = function() {
  this.result = 0;
};

Calculator.prototype.add = function(...vals) {
  var sum = vals.reduce((prev, next) => {
    return prev + next;
  }, this.result);
  this.result = sum;
  return this.result;
};

Calculator.prototype.subtract = function(...vals) {
  var difference = vals.reduce((prev, next) => {
    return prev - next;
  }, this.result);
  this.result = difference;
  return this.result;
};

Calculator.prototype.multiply = function(...vals) {
  var product = vals.reduce((prev, next) => {
    return prev * next;
  }, this.result);
  this.result = product;
  return this.result;
};

Calculator.prototype.divide = function(...vals) {
  var sum = vals.reduce((prev, next) => {
    return prev / next;
  }, this.result);
  this.result = sum;
  return this.result;
};

Calculator.prototype.clear = function() {
  this.result = 0;
  return this.result;
};

document.on('ready', newCalculator)

var newCalculator = function() {
  var calc = new Calculator();
  $('.result').html(calc.result)
}

var add = function(e) {
  $('.result').text(calc.add(e.target.value));
}

var subtract = function(e) {
  $('.result').text(calc.subtract(e.target.value));
}

var multiply = function(e) {
  $('.result').text(calc.multiply(e.target.value));
}

var divide = function(e) {
  $('.result').text(calc.divide(e.target.value));
}

$('.result').text(calc.result);

