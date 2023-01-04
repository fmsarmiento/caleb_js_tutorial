{
    let myButton = document.getElementById("clickme");
    // myButton.disabled = true; // disables button
    myButton.style.backgroundColor = "Brown"; // a css styling

    myButton.onclick = function() {
        myButton.style.backgroundColor = "green";
    };
}
// DOM - NODES
{ // document.childNodes on console to see the indexing
    let list = document.childNodes[1].childNodes[2].childNodes[9]
    console.log(list) // outputs the ordered list
    console.log(list.parentElement) // gets the body
}
{
    let list = document.getElementsByTagName("li"); // grabs all list items
    console.log(list[0])
    if(list[0].nodeType === 1){
        console.log("element");
    } else if(list[0].nodeType === 3) {
        console.log("It's a text");
    }
    console.log(list)
    let border = document.getElementsByClassName("border"); // grabs everything with class border
    console.log(border)
}
{
    let paragraph = document.getElementsByTagName("p")[0]; // get first occurence
    paragraph.childNodes[0].childNodes[0].nodeValue = "LLamos";
    console.log(paragraph);
    let paragraphs = document.getElementsByTagName("p");
    console.log(paragraphs);
}
{
    let list = document.getElementsByTagName("ol");
    console.log(list);
    let ourList = list[0];
    console.log(ourList);
    ourList.onmouseover = function() {
        console.log("Mouse over");
        ourList.childNodes[2].nodeValue = "Haus";
    }
}