/**
 * Created by Maurice on 3/5/2015.
 */


function Pietje(name){
    this.voorname = name;
}

function Animal(name){
    this.name = name;
}

Animal.prototype.sleep = function(){
    console.log(this.name +' is sleeping')
}

function Dog(name){
    if (!(this  instanceof Dog)) throw new Error('Please use new Dog()!!!!')
    //if (this === window)  throw new Error('Please use new Dog()!!!!')

    Animal.call(this, name)

    console.log( this)

    //this.eat = function(){
    //    console.log(this.name + ' is eating')
    //}
}


Dog.create= function(name){
    return new Dog(name);
}
Dog.prototype  =new Animal();

Dog.prototype.eat = function(){
    console.log(this)
    console.log(this.name + ' is eating')
}

function Demo(){
    if (this === window)  throw new Error('Please use new Demo()!!!!')

    var dog = new Dog('pluto');
    //Dog.prototype = {};

    dog.eat()



    Dog.prototype.bark= function(){
        console.log(this.name + ' is barking')
    }

    //dog.bark();
//console.log(dog.name)
}


new Demo()


//Dog.prototype = new Dog();

var dog = new Dog('pluto');
dog.eat();
//dog.sleep();

dog.eat = function(){
    console.log('Nope')
}
dog.eat()

//dog.eat = Dog.prototype.eat
delete dog.eat;

dog.eat()

//delete Dog.prototype.eat
//dog.eat()


dog.sleep();


console.log(typeof dog)

//var o = Dog.create('o')
//o.eat= undefined;
//o.eat = 1;

var o = {eat:function(){
    console.log('Eating')
}};

if ( typeof o.eat === 'function'){
    o.eat()
}

//if (o instanceof Dog){
//    o.eat()
//}


dog.eat();
var eat = dog.eat
eat();

var o = {
    name: "een object"
}
o.eat = dog.eat;
o.eat();


console.log(this);
var that = this;

$("#btn").click((function(){
    console.log(this);
    console.log(that);


}).bind(this))

function add(x, y){
    console.log(this + x + y);
}

add(1,2)

add.call(1,2,3)
add.apply(1,[2,3])

x = add.bind(10, 20);
x(1,2)

y = x.bind(123, 3);
y.call(456)

add.call(1,2,3)


Dog.prototype.toString = function(){
    return this.name;
}

console.log("Dit is " + dog)
console.log(dog.toString())