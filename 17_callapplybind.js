{
    function doStuff(input, y) {
        console.log(input, y);
        console.log(this);
    }

    doStuff.call("Hello", 5, 2); // change this by using call, then first arg will be this.
    doStuff.apply("Hello!", [5,2]); // apply takes in an array of arguments, but it's similar to call.
}
{
    // bind
    function doStuff(input, y) {
        console.log(input, y);
        console.log(this);
    }

    let newFunct = doStuff.bind("Hello", 5, 10); // bind creates a new function.
    newFunct();
}