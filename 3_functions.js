(function(){ //IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSION
    var age = 5; // age will only exist in this function.
    // IF WE DON'T PUT var before age, it will check for the next scope. In this case, next scope will be yung window. So age variable will be created at window, exposing it to the whole webpage.
})(); // (); tells the function to execute. We wrap the whole function in () also

{
    //block scoping
    let y = 10;  // Defined in a global scope, but var is stored in window and let is not;
    const x = 20; // let but const val
    {
        let y = 5; // Y here is different on the Y above.
        console.log(y)
    }
    console.log(y,x);
    var z = 100; // This can be accessed on a global scale.
}