{
    let grades = [1,2,3,4,5,10];
    grades.forEach(function(element, iteration, wholeArray){ // for each only goes through elements that are not undefined.
        console.log(`Hello, ${element}`);
    });

    let grapes = [
        [1,2,3,4,5,6],
        [10,20,30,40,50,60],
        [12,23,34,20,11,55]
    ];

    grapes.forEach(function(row){
        row.forEach(function(elt){
            console.log(elt);
        });
        console.log("~~~~~");
    });

    // check on labels - like jumps
}