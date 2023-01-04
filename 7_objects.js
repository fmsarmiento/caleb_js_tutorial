{
    let position = {
        x: 10,
        y: 20,
        print: function() {
            console.log(`X: ${this.x}\tY: ${this.y}`); // this refers to the object it is attached to
        }, // this: function object
        nestedObject: {
            z: 11
        }
    }
    console.log(position);
    let myPosition = position; // myPosition is the same element as position. So pointers lang sila
    position.print(); 
    console.log(position.nestedObject.z);
}