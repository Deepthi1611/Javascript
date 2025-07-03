let obj = {
    name: 'Deepthi',
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let obj2 = {
    name: 'Srikar'
}

// never do this in production code, this is just for demonstration purposes
obj2.__proto__ = obj; // setting the prototype of obj2 to obj
// now obj2 can access the properties and methods of obj
obj2.greet(); // Hello, my name is Srikar and I am 25 years old.
// this is called prototypical inheritance
// obj2 is inheriting the properties and methods of obj
// obj2 now has access to the greet method of obj
// when we call obj2.greet(), it looks for the greet method in obj2 first
// if it does not find it, it looks for it in the prototype chain, which is obj in this case
// so it finds the greet method in obj and calls it with the context of obj2
// this is why we see the name as Srikar and age as 25 in the output
console.log(obj2.name); // Srikar
console.log(obj2.age); // 25


Function.prototype.myBind = function() {
    console.log('This is a custom bind method');
}

function fun() {
    console.log('This is a function');
}

console.log(fun.__proto__)
// setting mybind method on Function prototype
// so that we can use it on any function
fun.myBind(); // This is a custom bind method