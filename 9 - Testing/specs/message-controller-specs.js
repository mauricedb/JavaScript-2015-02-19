/**
 * Created by Maurice on 6/25/2015.
 */


describe('The MessageController', function () {
    var scope;

    beforeEach(module('demoApp'))

    beforeEach(inject(function ($controller) {
        scope = {};
        $controller('MessageController', {
            $scope: scope
        })
    }))

    it('has a message on scope', function () {

        expect(scope.message).toBe('Hello there :-)')

    })

})

describe('The MessageController with fake service', function () {
    var scope;

    beforeEach(module('demoApp'))

    beforeEach(inject(function ($controller) {
        scope = {};
        $controller('MessageController', {
            $scope: scope,
            messageService: {
                getGreeting: function () {
                    return 'Fake';
                }
            }
        })
    }));

    it('has a message on scope', function () {

        expect(scope.message).toBe('Fake')

    })

})




describe('The TDDController', function () {
    var scope;

    beforeEach(module('demoApp'))

    beforeEach(inject(function ($controller) {
        scope = {};
        $controller('TDDController', {
            $scope: scope
        })
    }))

    it('has a message on scope', function () {

        expect(scope.message).toBe('Hello there :-)')

    })

})


describe('The MoviesController', function () {
    var scope, httpBackend;

    beforeEach(module('demoApp'))

    beforeEach(inject(function ($controller, $httpBackend) {
        scope = {};
        httpBackend= $httpBackend;

        $controller('MoviesController', {
            $scope: scope
        })
    }))

    it('has a movies on scope', function () {

        expect(scope.movies).toBeDefined();

    })


    it('has two movies on scope', function () {

        httpBackend.whenGET('/api/movies').respond([{}, {}])

        httpBackend.flush();
        expect(scope.movies.length).toBe(2);

    })

    it('has no movies on scope after failure', function () {

        httpBackend.whenGET('/api/movies').respond(500)

        httpBackend.flush();
        expect(scope.movies.length).toBe(0);

    })

})