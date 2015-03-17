/**
 * Created by Maurice on 3/16/2015.
 */

function Calculator(xId, yId, resultId) {
    this.xId = xId;
    this.yId = yId;
    this.resultId = resultId;
}

Calculator.prototype.getValue = function (id) {
    var xEl = document.getElementById(id);
    return +xEl.value;
};

Calculator.prototype.displayResult=function(result){
    var resultEl = document.getElementById(this.resultId);
    resultEl.innerText = result;
};

Calculator.prototype.add = function () {
    var x = this.getValue(this.xId);
    var y = this.getValue(this.yId);

    var sum = x + y;

    this.displayResult(sum);
};

Calculator.prototype.multiply = function () {
    var x = this.getValue(this.xId);
    var y = this.getValue(this.yId);

    var product = x * y;

    this.displayResult(product);
};

var calculator = new Calculator('x', 'y', 'result');

document.getElementById('add').addEventListener('click', function () {
    calculator.add();
});

document.getElementById('multiply').addEventListener('click', function () {
    calculator.multiply();
});
