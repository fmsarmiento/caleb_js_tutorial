{
    var valentine = new Date();     // date is a special constructor, returns date object
    var someTime = new Date(2020,11); // 11 is december. 0-based ang date
    console.log(someTime);     // DayOfWeek Month Day Year HH:MM:SS GMT+TimeZone (Timezone Standard Time)
    var epochTime = new Date(0); // Jan 1, 1970 [epoch] , date in milliseconds + timezone delay
    var dateToday = new Date(Date.now());
    console.log(dateToday);
    
    // timer
    let start = Date.now();
    let x = 0;
    for(let i =0; i<100000000; i++) {
        x += i;
    }
    let end = Date.now();
    let timeTook = end - start;
    console.log(`time it took is ${timeTook} milliseconds`);

    // date between
    let before = new Date(2020,10,15);
    let after = new Date(2020, 10, 20);
    let days = after - before; // in ms
    console.log(`Difference is ${days / (1000 * 60 * 60 * 24)} days`);
}
{
    // Date Methods
    let myDate = new Date('12 Jan 1995 00:15:54 GMT'); // not guaranteed to work on all browsers. Gets string, interprets as date
    console.log(myDate);
    let myDate2 = new Date(Date.UTC(2012, 11, 15, 10, 11, 12)); // assumes date is already in UTC
    myDate2.setHours(5);
    console.log(myDate2.getFullYear());
    console.log(myDate2.getMonth());
    console.log(myDate2.getDate());
    console.log(myDate2.getHours());
    console.log(myDate.getTimezoneOffset() / 60); // offset ng timezone mo sa central standard time, in hours.
}