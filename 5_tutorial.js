{
    let myName = "Caleb";
    myName = myName.toUpperCase(); // primitive fnx: meaning it will create another string, so we need to assign a return val to the fnx
    console.log(myName);
    // objects are the opposite of primitives
    let yourName = new String("Claire"); // an object
    console.log(typeof(yourName));
    // -Infinity, NaN, -Infinity
    // Precedence: PEMDAS
    x = 5;
    x += 3;
    x++; // this adds after the assignment.
    ++x; // this adds before the assignment.
    console.log(x)
}
{
    // Functions
    let x = 5;
    let y = "10";
    let z = "0.52";
    let yInt = Number.parseInt(y);
    let zFloat = Number.parseFloat(z);
    console.log(x+yInt+zFloat);
}
{
    // Number System Conversions
    let input = 101;
    console.log("Decimal:\t",input);
    console.log("Binary:\t",Number.parseInt(input, 2));
    console.log("Octal:\t",Number.parseInt(input, 8));
    console.log("Hex:\t",Number.parseInt(input, 16));
}
{
    let x = 5;
    x.toString(2) // Binary conversion
    console.log(x.toFixed(2)); // digit is fixed to 2 dec places
    let y = new Number(123);
    console.log(typeof(y.valueOf())); // gets value from the object
}
{
    // MATH OBJECTS
    let abs = Math.abs(-36);
    var goUp = Math.ceil(.000001);
    var goDown = Math.floor(.99999);
    var power = Math.pow(3,2); // 3^2
    var roundingNormal = Math.round(4.9);
    var isPositive = Math.sign(-Infinity); // returns false
    var getInt = Math.trunc(4.9999); // 4
}
{
    // STRINGS
    let myName = "Francis\nHi!";
    console.log(myName[2]); 
    console.log("My name is "+myName);
    console.log(`My name is ${myName}!`);
    // for newlines, dapat on the far left yung text. no indentions allowed
    let newLines = "Cool! You can really \
just split each line like this \
instead of adding the special \
character called backlash n.";
    console.log(newLines);
    console.log(newLines.length);
}