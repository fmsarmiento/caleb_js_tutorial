{
    let i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }

    i = 0;
    do {
        console.log(i);
        i++;
    } while(i < 10);
    console.clear()

    for(i = 0;i<10;i++) {
        console.log(i);
    }
}
{
    // break and continue
    for(let i = 0;i<15;i++) {
        if (i === 9) {
            console.log("9 found. breaking");
            break;
        }
        if (i === 2) {
            console.log("2 found. Skipping.")
            continue;
        }
        console.log(i);
    }
    console.log("For loop done.");
}
{
    // nested loops
    let d = document.getElementById("destination");
    for(let i=0;i<10;i++) {
        for(let k=i;k>=0;k--) {
            d.append(k+" ");
        }
        let br = document.createElement('br'); // how to create a break
        d.appendChild(br)
    }
}