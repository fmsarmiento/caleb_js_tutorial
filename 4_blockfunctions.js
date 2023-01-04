{
    let a = 5;
    let b = "10"; // This is a string.
    let tacos; // type is undefined
    let tacoShell = null // type is null. We usually use this to tell us explicitly that tacos has no value.
    a = a + b; //510: Concatenates instead
    let person = { // object: collection of key-value pairs
        name: "Caleb",
        age: 93,
        favFood: "Yuck!",
        fun: function(){ // fun is a function available to person
            console.log("This is a function.");
        }
    }
    console.log(person.name + "\t" + person.age + "\t" + person.favFood)
    person.fun();
    console.log(a);
    let grades = [30,30,12,23];
    let now = new Date();
    console.log(now, grades);
}