{
    function User() {
        this.active = false;
    }
    User.prototype.sayHello = function (){
        return this.name+ " says hi!";
    };
    function Student(name, major) {
        this.name = name;
        this.major = major;
    }
    Student.prototype = new User(); // prototyping to user

    function Teacher(name, teaching) {
        this.name = name;
        this.teaching = teaching;
    }
    Teacher.prototype = new User(); // prototyping to user
    Teacher.prototype.sayHello = function() {
        return `${this.name} says hi!`;
    }

    let student1 = new Student("Peasant student","English");
    let teacher1 = new Teacher("Caleb Curry",["Math","Programming"]);
    console.log(student1, teacher1);
    console.log(teacher1.sayHello());
    // instance of operator - to make sure we are working on an object with the same datatype
    // basically to tell that student is a valid user, etc.
    console.log(teacher1 instanceof Teacher); // is teacher1 a child of Teacher?
    console.log(teacher1 instanceof User); // is teacher1 a child of Object?
}