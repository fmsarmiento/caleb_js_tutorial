{
    function fact(x) {
        let total = 1;
        for(let i = x; i > 1; i--) {
            total *= i;
        }
        return total;
    }
    console.log(fact(5));

    document.getElementById("name").onclick = () => {console.log("Name clicked")};
}
{
    // try block
    try {
        doesntexist;
    } catch {
        console.log("Something wrong happened.");
    } finally {
        console.log("This always happens");
    }
    // throw

    function doSomething() {
        throw { error: "Tis broke", code: -1}; // error: string, code: retval
    }
    try {
        doSomething();
    } catch (e) {
        console.log(e); // e is the error
        console.log("Error");
    } finally {
        console.log("Wrapping things up...");
    }
}