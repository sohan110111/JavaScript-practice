for (var i = 1; i <= 10; i++) { // i variable use for increment operator
    console.log(i);
}

console.log("Now, array elements print : ");

var nums = [55, 66, 77, 88, 99]; // here nums means 'numbers'
console.log(nums);
for(var i = 0; i < nums.length; i++) {
    var arrayElements = nums[i];
    console.log(arrayElements);
}

console.log("Friends-name print : ");

var friendsName = ["Sujon", "Shoaib", "Masud", "Rasel", "Peyas", "Musfuq", "Zihad", 0];
console.log(typeof(friendsName)); // print object type
friendsName.pop();
console.log(friendsName);
var type = typeof(friendsName);
console.log(type); // object
console.log(typeof(nums)); // object
console.log("Therefore, arrayElement are special typeOf object.");
