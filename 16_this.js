{
    let me = {
        name: "Caleb",
        outputMe: outputMe
    };

    function outputMe() {
        console.log(this); // if we only use this, it will refer to the object it is attached to (me)
        console.log(this.name); // refer to me.name
    };

    function outputMeStrict() {
        'use strict';
        console.log(this);
    }

    me.outputMe(); // method

    outputMe(); // function

    outputMeStrict(); // invoking a function in strict mode ; can't be called as a method

    // constructor
    function Person() {
        console.log(this);
        this.name = "Caleb";
        console.log(this);
    };
    
    let person = new Person(); // we call the constructor. Then the constructor tells the created object to have name equal to Caleb.
    console.log(person);
}