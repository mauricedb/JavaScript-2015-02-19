(function () {

    $.getJSON('/articles.json').then(function (e) {

        $(document).trigger(eventNames.articlesLoaded, {articles: e})

    });



    var injectables={};

    function register(name, cb){
        injectables[name] = {cb: cb}
    }

    function create(name){
        //var result = injectables[name].cb()

        var inject = injectables[name];
        if (!inject){
            throw new Error('Dependency ' + name +' unresolvable');
        }

        if (inject.obj){
            return inject.obj;
        }
        var args = [];
        if (inject.cb.dependencies){
            for (var i=0;i< inject.cb.dependencies.length;i++){
                args.push(create(inject.cb.dependencies[i]))
            }
        }

        var result = inject.cb.apply(null, args);
        inject.obj = result;
        return result;
    }


    function createCustomer(name){
        return {customerName : 'The customer', name:name};
    }
    createCustomer.dependencies = ['name']
    register('Customer', createCustomer);

    function test1(name){
        console.log(name);
    }
    test1.dependencies = ['name']
    register('test1', test1)

    //console.log(test1)

    function name(){
        return 'Maurice';
    }
    register('name', name)



    var t = create('test1');


    var c = create('Customer');
console.log(c);
}());