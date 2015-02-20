
var add = function(x,y,z){
    console.log('add');

    add.doStuff();
};

function subtract(){
    console.log('subtract');
}

add.doStuff = function () {
    console.log('doStuff')
};

add();
subtract();

console.log(add.length);
console.log(add.toString());
console.log(add.call.toString());


function getInner(){
var now;

    setInterval(function () {
        now = new Date();
    }, 100);

    return  function(){
        console.log(now);
    }
}

var fn = getInner();

fn();




function iterator(data, fn){
    for (var i = 0; i< data.length; i++){
        if (data[i]){
            fn(data[i]);
        }
    }
}

var data = [1,2,3];
data[5] = 5;
var sum  = 0;
iterator(data, function(v){sum += v});
console.log(sum);
console.log(data)


console.log(data.map(function (v) {
    return v + 2;
}));


var people= [{name:'Maurice', city:'Zoetermeer'},
    {name:'Jan', city:'Zoetermeer'},
    {name:'Piet', city:'Amsterdam'},
    {name:'Klaar', city:'Zoetermeer'}];

console.table((people.map(function (person) {
   return {firstName: person.name};
})));


console.table((people.map(function (person) {
    person.x = 1;
    return person;
})));

console.table(people);

var cities = people.map(function (person) {
    return {city: person.city, count: 1};
})

console.table(cities.reduce(function (result, city) {
    var oldCity = result.filter(function (c) {
        return c.city=== city.city;
    }).pop();

    if (!oldCity) {
        result.push(city);
    }else{
        oldCity.count += city.count;
    }

    return result;
}, []));
