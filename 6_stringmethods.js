{
    let sampleString = "Frenchies";
    console.log(sampleString.concat(" Fries."));
    let text = "This contains apples and oranges.";
    let search1 = "apples";
    let search2 = "bananas";
    console.log(text.includes(search1)); // true
    console.log(text.includes(search2)); // false
    console.log(text.indexOf(search1));
    console.log(text.indexOf(search1, 2)); // starts finding at index 2
    console.log(text.indexOf("a"), text.indexOf("a")+1) // finds 2nd occurence
    console.log(text.indexOf(search2)); // returns -1 ; not found
}
{
    let content = "We'll now talk about other string methods, yay!"
    console.log(content.substring(6,11)); // get index 6 to 11
    console.log(content.substr(6, 5));// idnex 6 + 5 chars after it
    console.log(content.toUpperCase());
    console.log(content.toLowerCase());
    let text2 = "   \t\n Yay \t\n"
    console.log(text2.trim());//removes whitespaces b4 and after
    let text3 = "What? ";
    console.log(text3.repeat(50));
    console.log(content.replace());// uses regexes, didn't go through it.
}