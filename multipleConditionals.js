var getJob = false;
var savingAmount = 500000;

if(getJob == true && savingAmount > 200000) {
    console.log("You are ready to get married.");
}
else {
    console.log("You are not ready to get married.");
}

console.log("Check else if ladder");

if(getJob == true && savingAmount > 200000) {
    console.log("You are ready to get married.");
}
else if(getJob == true || savingAmount > 200000){
    console.log("Let's go to search 'Bride'.");
}
else {
    console.log("You are not ready to get married.");
}
