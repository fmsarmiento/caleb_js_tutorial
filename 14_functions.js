{
    let myFunct = function(x,y) { // fnx expression, sets the function to an object myFunct(). This is different from a function declaration function pow(x,y){};
        let total = 1;
        for(let i = 0; i < y; i++) {
            total *= x;
        }
        return total;
    };

    console.log(myFunct(3,4)); // fnx invocation
}
{
    console.log(x); // will print undefined. It sees that x is there, but not executed.
    var x = 10;

    doStuff(); // this works, because the whole function is hoisted. FOR FUNCTION DECLARATION
    function doStuff() {
        console.log("Hey");
    };

    // doMoreStuff(); // this will make an error. Function expression won't be hoisted. 
    var doMoreStuff = function() { 
        console.log("Hey more!");
    };

    // console.log(y); // not initialized. Hoisting only happens to function declarations and vars
    let y = 10;
}
{
    // Functions as first class citizens / objects
    function pow(x, y) {
        let total = 1;
        for(let i =0;i<y; i++) {
            total *= x;
        }
        return total;
    }

    let coolFunction = [pow];
    console.log(coolFunction[0]);

    let mathFunctions = {
        power: pow
    };

    console.log(mathFunctions.power(3,3));

    pow.description = "Will raise x to y";
    console.log(pow.description);

    function callbackExample(callback) {
        return callback(3,5); // callback is just a fnx that will be executed inside a function that takes it as a paremeter
    }

    console.log(callbackExample(pow));

    function returnAFunction() {
        return pow;
    }

    console.log(returnAFunction()(10,3)); // call return a function, which calls pow, which uses (x,y)
}