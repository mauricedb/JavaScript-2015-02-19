/**
 * Created by Maurice on 2/19/2015.
 */

//http://addyosmani.com/resources/essentialjsdesignpatterns/book/

var module =(function () {
//function doStuff() {
//    return
//    {x : 1};
//
//}
//
//console.log(doStuff())


//function doStuff2(){
//    console.log(x);
//
//    if (true){
//        var x = 1;
//    }
//    console.log(x);
//
//}

    function wrapper() {
        'use strict';

        function doStuff2() {
            //var x = undefined;
            console.log(window.x);

            if (true) {
                window.x = 1;
            }
            console.log(x);

        }

        //var x = 2;
        doStuff2();
    }

    wrapper();

var obj;

    if (obj && obj.doStuff) {
        obj.doStuff()
    }

    if (!!obj) {

    }


    return  {
        wrapper: wrapper
    };
}());