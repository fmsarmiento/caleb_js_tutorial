{
    function cube(x) {
        console.log(x*x*x);
        return x*x*x;
    }

    cube(5);

    let cubeArrow = (x) => x * x * x; // let fnxname = (args) => what to return;
    let cubeArrowWithReturn = x => {return x * x * x;}; // let fnxname = (args) => {code block here};
    console.log(cubeArrow(5));
    console.log(cubeArrowWithReturn(5));
}
{
    // value of this in arrow functions
    let arrow = () => this;
    function normal() {
        return this;
    }

    console.log(arrow());
    console.log(normal());

    let functions = {
        // this: this, // solution to arrowTest
        arrow: arrow, // this won't change no matter where it is called
        normal: normal, // this changes based on where it was called
        arrowTest: () => this // if you use this in an object, value of this won't be an object
    }
    console.log(functions.normal());
    console.log(functions.arrow());
    // gacha with the arrow function. Might give result we're not used to
    console.log(functions.arrowTest()); // this will now show the window object still. Weird
}
{
    console.log("***");
    // bind with arrow functions
    let arrow = () => this;
    let newFunc = arrow.bind("Hello"); // bind this to "Hello" DOES NOT WORK
    console.log(arrow()); // this won't work!
    console.log(newFunc()); // binded stuff
}