{
    pow.calculated = {};
    function pow(x, y = 2, ...extra) { // y will default to 2 if no y is given. ...extra gets all args after
        console.log(extra);
        let stringVersion = x + "^" + y;
        if (stringVersion in pow.calculated) {
            console.log(`${stringVersion} Already calculated.`);
            return pow.calculated[stringVersion];
        }
        let total = 1;
        for(let i =0;i<y; i++) {
            total *= x;
        }
        pow.calculated[stringVersion] = total; // dictionary. Key-value pair
        console.log(pow.calculated);
        return total;
    }
    // this can be used to maintain state of functions, cool.
    pow(3,3);
    pow(3,4);
    pow(3,4);
    pow(3);
    pow(3,8,5);
}
{
    function largest(x,...extra) {
        let largest = x;
        extra.forEach(function(elt){
            if(elt > largest) { largest = elt; }
        });
        return largest;
    }

    console.log(largest(3,4,5,2,1,222,3,101));
}
{
    // Implicit parameters
    function sampleFunct(x,y) {
        console.log(this);
        console.log(arguments);
    }

    sampleFunct(2,3);
}