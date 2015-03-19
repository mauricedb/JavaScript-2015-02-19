/// <reference path="jquery.d.ts" />
/**
 * Created by Maurice on 3/16/2015.
 */

module Module1 {

   export  class Calculator implements ICanAdd {


        constructor(private xId: string, private yId: string, private resultId: string) {
        }

        private getValue(id: string) {
            var xEl = <HTMLInputElement>document.getElementById(id);
            var value: number = +xEl.value;
            return value;
        }

        private displayResult(result: number) {
            var resultEl = document.getElementById(this.resultId);
            resultEl.innerText = result.toString();
        }

        public addNumbers(x: number, y) { }
        public add() {
            var x = this.getValue(this.xId);
            var y = this.getValue(this.yId);

            var sum = x + y;

            this.displayResult(sum);
        }

        public multiply(fn) {
            var x = this.getValue(this.xId);
            var y = this.getValue(this.yId);

            var product = x * y;

            this.displayResult(product);
            fn(product);
        }
    }


    class InternalStuff {
        

    }

   export  interface ICanAdd {
        addNumbers(x: number, y: number)
    }
}

var calculator = new Module1.Calculator('x', 'y', 'result');

document.getElementById('add').addEventListener('click', function () {
    calculator.add();
});

document.getElementById('multiply').addEventListener('click', function () {
    calculator.multiply(r => this.log(r));
});

calculator.addNumbers(1, '');


[1].map(n => n * n);

class Demo1 {
    constructor(calc: Module1.ICanAdd) {

        calc.addNumbers(1, 2);
    }
}

class Demo2 {
    constructor(calc: { addNumbers(x: number, y: number) }) {

        calc.addNumbers(1, 2);
    }
}

var d = new Demo1(calculator);


class SetOfStuff<T> {
    add(value: T) {}
}


class SetOfDemo2 extends SetOfStuff<{name:string}>{
    
}


//var o: SetOfDemo2;
//o.add({
//    name: ""
//});


function addStuff(x, ...stuff: number[]) {
    stuff.forEach(x => console.log(x));
}


//var $: JQueryStatic;

$.ajax({
    url: ''
});

$.getJSON('')


var _: any;

_.map()