{
    let user = {
        active: true,
        sayHello: function() {
            return this.name + " says hi!";
        }
    };
    let teacher = {
        name: "Cajote",
        teaching: ["math", "science"],
        sayHello: function() { // override the sayHello function on user.
            return this.name + " teaches " + this.teaching.toString(", ");
        }
    };
    let student = {
        name: "Francis",
        major: ["english"]
    };

    Object.setPrototypeOf(student, user);
    Object.setPrototypeOf(teacher, user); // prototype of teacher will be user.
    student.active = false; // prototype is false, but student's active status will override it. It will set it directly on the object.
    console.log(teacher.active); // so teacher will inherit user's characteristics
    console.log(student.active);

    // POLYMORPHISM
    let newMembers = [teacher, student];
    newMembers.forEach(function(e){
        console.log(e.sayHello());
    });

    console.log("active in teacher? ", "active" in teacher); // check if the property is in the object
    console.log("Active in teacher? ", teacher.hasOwnProperty("active")); // check if the property is in the specific object, not including parent
    // get the properties in the object
    let properties = [];
    for(let prop in teacher) {
        if(teacher.hasOwnProperty(prop)) {  // get properties directly on the object (no parents)
            properties.push(prop);
        } else {
            console.log(`${prop} exists, but on a parent.`);
        }
    }
    console.log(properties);
    
}

function doSomething() {
    return 1+1;
}

let test = new doSomething(); // create a constructor of doSomething
if (doSomething.prototype === Object.getPrototypeOf(test)) {
    console.log("Match!");
}
// doSomething -> has an object.constructor -> points back to doSomething

function Taco() {
    this.toppings = ["cheese"];
}

Taco.prototype.make = function() { // so what this does is it transfers this prototype to each of the object created using Taco.
    console.log("Making a taco.");
}

let myTaco = new Taco();
let newTaco = new Taco();