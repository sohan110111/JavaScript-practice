var bookShelf = ["Bangla", "English", "Math", "Physics", "Chemistry", "Biology"];
console.log(bookShelf.length);
console.log(bookShelf);
bookShelf.push("Psychology");
console.log(bookShelf);
bookShelf.pop();
console.log(bookShelf);
bookShelf.unshift("BookName");
console.log(bookShelf);
console.log(bookShelf.length);
bookShelf.shift();
console.log(bookShelf);
console.log(bookShelf.length);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var removed = arr.splice(2,1);

/*
removed === [3, 4]
arr === [1, 2, 5, 6, 7, 8, 9, 0]
*/
console.log(arr);



