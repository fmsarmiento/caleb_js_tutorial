{
    // if else
    let name = "Francis";
    if(name === "Caleb") { // === identity operator // strict equality. Checks that they have the same element AND type. "5" and 5 are not equal
        // !== strict inequality
        console.log("Hello, Caleb.");
    }
    else if (name === "Francis") {
        console.log("Hello, Francis.");
    }
    else if (name === "John" || name === "Doe") { // operators are the same on python
        console.log("Wtf!");
    }
    else {
        console.log("Who are you?");
    }
}
{
    // switch
    let name = "Francis";
    switch(name)
    {
        case "Caleb":
            console.log("You are Caleb.");
            break;
        case "Francis":
            console.log("How's the tutorials?");
            break;
        default:
            console.log("Who are you?!");
    }
}
{
    // Single Line if-else statement
    let name = "Francis";
    if(name === "Francis") console.log("Hello"); 
    // Ternary Operator
    let points = name === "Francis" ? 10 : 0; // if name is francis, points = 10. else, 0.
    console.log(points);
}