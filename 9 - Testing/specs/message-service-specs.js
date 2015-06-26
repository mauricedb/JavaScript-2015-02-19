/**
 * Created by Maurice on 6/25/2015.
 */


describe('The messageService', function () {
    var svc;
    var x;
    beforeEach(module('demoServices'))

    beforeEach(inject(function (messageService, xx) {
        svc = messageService;

        x = xx;
    }))

    it('has a greeting', function () {

        var result = svc.getGreeting();

        expect(result).toBe('Hello there :-)')
    })

    it('has a faked greeting', function () {
        spyOn(x, 'bla').and.returnValue('from xx');

        var result = svc.getGreeting();

        expect(result).toBe('Hello there from xx')

        expect(x.bla).toHaveBeenCalled();
    })
})