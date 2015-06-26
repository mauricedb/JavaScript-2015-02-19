/**
 * Created by Maurice on 6/23/2015.
 */

function Calculator(logger){
    this.logger = logger;
    this.result = 0;
}

Calculator.prototype.add = function(value){
    this.result += value;
    this.logger.print(this.result);
};

Calculator.prototype.subtract = function(value){
    this.result -= value;
};
