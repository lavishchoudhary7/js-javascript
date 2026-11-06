const obj = {
    name: "rohit",
    account_balance: 4210,
    gender: "male",
    age: 30
};

console.log(obj);


// Instagram object
const insta = {
    instaid: "lavish_choudhary0",
    password: 3453678347347853566,
    age: 30
};

console.log(insta);
console.log(insta.password);


// Second method of creating object
const person = new Object();

person.name = "lavish";
person.age = "77";
person.address = "lavish ka ghar";

console.log(person);


// Object values ko array me convert karna
const arr = Object.values(obj);
console.log(arr);


// Merge two objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 2 };

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj5 = {...obj1,...obj2,...obj3};

//shallow copy
// nested copy
const user = {
    name:vishchoudhary,
    balance:876775,
    address :{
        pincode:867766,
        city: muradnagar
    }
}
console.log(user.address.pincode);

const user2 = Object.assign({},user);
console.log(user2);



let lavish={
    name:tlavish,
age :34533334535
}
const{name,age}=lavish;
console.log(name,age);
