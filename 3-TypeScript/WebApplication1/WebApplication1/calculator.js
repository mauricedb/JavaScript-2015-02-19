/// <reference path="jquery.d.ts" />
/**
 * Created by Maurice on 3/16/2015.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Module1;
(function (Module1) {
    var Calculator = (function () {
        function Calculator(xId, yId, resultId) {
            this.xId = xId;
            this.yId = yId;
            this.resultId = resultId;
        }
        Calculator.prototype.getValue = function (id) {
            var xEl = document.getElementById(id);
            var value = +xEl.value;
            return value;
        };
        Calculator.prototype.displayResult = function (result) {
            var resultEl = document.getElementById(this.resultId);
            resultEl.innerText = result.toString();
        };
        Calculator.prototype.addNumbers = function (x, y) {
        };
        Calculator.prototype.add = function () {
            var x = this.getValue(this.xId);
            var y = this.getValue(this.yId);
            var sum = x + y;
            this.displayResult(sum);
        };
        Calculator.prototype.multiply = function (fn) {
            var x = this.getValue(this.xId);
            var y = this.getValue(this.yId);
            var product = x * y;
            this.displayResult(product);
            fn(product);
        };
        return Calculator;
    })();
    Module1.Calculator = Calculator;
    var InternalStuff = (function () {
        function InternalStuff() {
        }
        return InternalStuff;
    })();
})(Module1 || (Module1 = {}));
var calculator = new Module1.Calculator('x', 'y', 'result');
document.getElementById('add').addEventListener('click', function () {
    calculator.add();
});
document.getElementById('multiply').addEventListener('click', function () {
    var _this = this;
    calculator.multiply(function (r) { return _this.log(r); });
});
calculator.addNumbers(1, '');
[1].map(function (n) { return n * n; });
var Demo1 = (function () {
    function Demo1(calc) {
        calc.addNumbers(1, 2);
    }
    return Demo1;
})();
var Demo2 = (function () {
    function Demo2(calc) {
        calc.addNumbers(1, 2);
    }
    return Demo2;
})();
var d = new Demo1(calculator);
var SetOfStuff = (function () {
    function SetOfStuff() {
    }
    SetOfStuff.prototype.add = function (value) {
    };
    return SetOfStuff;
})();
var SetOfDemo2 = (function (_super) {
    __extends(SetOfDemo2, _super);
    function SetOfDemo2() {
        _super.apply(this, arguments);
    }
    return SetOfDemo2;
})(SetOfStuff);
//var o: SetOfDemo2;
//o.add({
//    name: ""
//});
function addStuff(x) {
    var stuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        stuff[_i - 1] = arguments[_i];
    }
    stuff.forEach(function (x) { return console.log(x); });
}
//var $: JQueryStatic;
$.ajax({
    url: ''
});
$.getJSON('');
var _;
_.map();
//# sourceMappingURL=calculator.js.map