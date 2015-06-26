/**
 * Created by Maurice on 6/25/2015.
 */


describe('The calculator', function () {
    var calc, logger;

    beforeEach(function () {
        logger = {
            print: function (e) {
                console.log(e)
            }
        };
        calc = new Calculator(logger);

        spyOn(logger, 'print');
    });


    describe('can add', function () {

        it('1 + 1', function () {



            calc.add(1);
            calc.add(1);

            expect(calc.result).toBe(2);

            expect(logger.print).toHaveBeenCalled();

            console.log(jasmine.version)
        });

        it('0.1 + 0.2', function () {
            calc.add(0.1);
            calc.add(0.2);

            expect(calc.result).toBeCloseTo(0.3, 15);

        });
    })

    describe('can subtract', function () {

        it('-1 - 1', function () {

            calc.subtract(1);
            calc.subtract(1);

            expect(calc.result).toBe(-2);


            console.log(jasmine.version)
        });

        it('-0.1 - 0.2', function () {
            calc.subtract(0.1);
            calc.subtract(0.2);

            expect(calc.result).toBeCloseTo(-0.3, 15);

        });
    })

    it('is async', function(cb){
        setTimeout(function(){
            expect(1).toBe(1);
            cb()

        }, 4);
    })
});