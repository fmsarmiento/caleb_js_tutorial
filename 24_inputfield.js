{
    console.log(document.getElementById("input").hasAttribute("tacos")); // check if it has val
    console.log(document.getElementById("input").getAttribute("tacos")); // get attr val
}
{
    let button = document.getElementById("clickme");
    button.onclick = function() {
        node = document.createElement('li'); // create list
        input = document.getElementById("input").value
        node.appendChild(document.createTextNode(input)); // add text on list
        console.log(node);
        let list = document.getElementById("stuff"); // get list
        list.appendChild(node); // append on list
    };
}