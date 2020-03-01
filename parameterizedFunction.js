function doubleIt(num) {
    var result = num * 2;
    console.log(result);
}
doubleIt(5);
var doubleOne = doubleIt(7);
var doubleTwo = doubleIt(4);
console.log(doubleOne, doubleTwo);


function devide(num1) {
    var value = num1/2
    return value;
}
var first = devide(20);    /*Jan 12, 2020 · // app.js console.log(typeof undefined) console.log(typeof null) console.log(null === undefined ) console.log(null == undefined) See the output. See, if you compare the value, then they both are same, but if you compare its datatype, then they are different that is why we get false.*/
var second = devide(10); 
var difference = first - second;
console.log(difference);


function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var addition = add(10, 20);
console.log(addition);