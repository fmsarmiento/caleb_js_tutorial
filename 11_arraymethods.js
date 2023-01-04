{
    let grades = [11,13,0,1,2,3,4,5,6,7,8,9,10];
    grades.push(3); // add to last elt
    let poppedValue = grades.pop(); // remove last elt
    grades.unshift(40); // add 40 to 1st elt
    grades.shift(); // remove 1st elt
    grades.splice(2,3); // start at index 2, then delete 3 items. can return these values
    console.log(grades);
    grades.splice(2, 0, 3, 4, 5); // start at index 2, delete 0 items, add 3,4,5 starting index 2
    console.log(grades);
    // note: you can use splice to remove and insert at the same time, replacing stuff
    grades.sort(); // sorts by first number, not by increasing number
    console.log(grades);
    grades.sort(function(a,b) {return a-b}); // sorts by value
    console.log(grades);
    grades.reverse();
    console.log(grades);
    grades.fill(-1, 0, grades.length) // change elements of the array to be -1, starting at position 0 to grades.length-1
    // grades.copyWithin() // copy elements from an array to the same array
    grades = [20,22,39];
    gradesB = [43,12,524];
    grades = grades.concat(gradesB); // concat doesn't change the array.
    console.log(grades);
    grades.includes(22); // returns true
    grades.indexOf(22);// returns -1 if not found.
    let y = grades.join(","); // array to string, joined by "," ("," is optional)
    console.log(y);
    grades.slice(3,5); // get element from index 3 to 5 - 1 (4). Without 5, maging end of array sya.
}