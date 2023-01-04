// alert("Hello world!");
document.getElementById("clickme").onclick = function(){ // if button "clickme" is pressed,
    document.getElementById("name").innerHTML = "You clicked the button!"; // Change the contents of <p>
    document.getElementById("clickme").style.display = "none"; // make button disappear
}