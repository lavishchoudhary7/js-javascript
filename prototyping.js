let obj1 = {
    name: "lavish"
};

let user2 = {
    AMOUNT: 20
};

user2.__proto__ = obj1;

console.log(user2.AMOUNT); // 20
console.log(user2.name);   // lavish