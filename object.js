var student = {id:121, phone:1734, name:"Abit"};
console.log(student);

var property1 = student.name;
console.log(property1);

var property2 = student["id"];
console.log(property2);

var phonePropName = "phone";
var property3 = student[phonePropName];
console.log(property3);


var student2 = {id:122, phone:11734, name:"Mohit"};
//update information student2....
student2.phone = 9876;
console.log(student2);
student2["phone"] = 87654;
console.log(student2);
student2[phonePropName] = 87654387656; // upon it predifined in line no 10.....var phonePropName = "phone";
console.log(student2); 

//property add student2

student2.hobby = "Superior programmer";
console.log(student2);
student2["hobby2"] = "Bandmintion play";
console.log(student2);
var hobbyProp = "hobby3";
student2[hobbyProp] = "Too much hardwork";
console.log(student2);

