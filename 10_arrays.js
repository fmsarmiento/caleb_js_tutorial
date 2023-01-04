{
    let grades = [69,169,269];
    grades[0] = 79;
    grades[10] = 3;
    grades.length = 15;
    console.log(grades);
}
{
    let average = 0;
    let numItems = 0;
    let grades = [10,20,30,40,50,60,70,80,90,100];
    grades.length = 30;
    for(let i=0;i<grades.length;i++){
        if(grades[i] !== undefined) {
            console.log(grades[i]);
            average += grades[i];
            numItems++;
        }
    }
    average /= numItems;
    console.log("Average is: "+ average);
}
{
    let grades = [];
    while(true) {
        let input = prompt("Add a grade | q to quit");
        if(input==="q" || input === null) { // if we press cancel, input === null nun.
            break;
        }
        grades.push(Number(input));
    }
    console.log(grades);
}