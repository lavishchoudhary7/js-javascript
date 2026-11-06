const arr = [2,3,4,5,6,7,8,9];
console.log(arr.length);

console.log(arr[5]);

const newarr =structuredClone(arr);
console.log(newarr==arr);

arr.push(56);
arr.pop();


arr.unshift(30);
arr.shift();
delete arr[0];

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(0));

console.log(arr.splice(2,4,"lavish",67,69));

console.log(arr.toString());       // array converted to a comma-separated string
console.log(typeof arr.toString()); // "string"
console.log(arr.join("@"));//addd symbol after 1 array

let arr1 = [2,3,4,5,6,];
let arr2 = [3,5,6,7,7,7];
let arr3 = arr1.concat(arr1,arr2);
console.log(arr3);

let arr2d =[[2,3,4],[4,5,6],[7,8,9]];
console.log(arr2d[2][2]);

let abc = [2,34,5,6,5];
console.log(Array.isArray(abc));
