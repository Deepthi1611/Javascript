// CALL METHOD

let name = {
    firstName: 'Deepthi',
    lastName: 'Purijala',
    // printFullName: function() {
    //     console.log(this.firstName + ' ' + this.lastName);
    // }
}

name.printFullName(); // Deepthi Purijala

let name2 = {
    firstName: 'Srikar',
    lastName: 'Purijala'
}

// Here if we want to print the full name of name2 using the printFullName function of name, rewriting the function is not a good idea.
// Instead, we can use the call method to borrow the function from name and use it with name2.
// using call method we can do a function borrowing
// we can borrow function of an object and use it in another object
// for call method, the first argument will be the reference to the object we want to use(the object we want to point to)
name.printFullName.call(name2); // Srikar Purijala

// generally, we don't write functions inside objects, we write them outside and use them in objects
function printFullName(hometown, state) {
    console.log(this.firstName + ' ' + this.lastName + ' from ' + hometown, + ' ' + state);
}

// first argument is the object we want to point to, and the rest are the arguments we want to pass to the function
printFullName.call(name, 'Hyderabad', 'Telangana'); // Deepthi Purijala
printFullName.call(name2, 'Guntur', 'Andhra Pradesh'); // Srikar Purijala


// APPLY METHOD
// the only difference between call and apply is that in apply, we pass the arguments as an array
// instead of passing arguments one by one, we pass them as an array
// the first argument is the object we want to point to, and the second argument is an array of arguments
printFullName.apply(name, ['Hyderabad', 'Telangana']); // Deepthi Purijala
printFullName.apply(name2, ['Guntur', 'Andhra Pradesh']); // Srikar Purijala


// BIND METHOD
// bind method is similar to call method but the only difference is the bind method binds the function to the object and returns a new function
// it does not call the function immediately, it returns a new function that can be called later
// we can use bind method to create a new function that is bound to the object we want
let printName = printFullName.bind(name, 'Hyderabad', 'Telangana');
// now printName is a new function that is bound to the name object and we can call it later
printName(); // Deepthi Purijala
let printName2 = printFullName.bind(name2, 'Guntur', 'Andhra Pradesh');
// now printName2 is a new function that is bound to the name2 object and we can call it later
printName2(); // Srikar Purijala