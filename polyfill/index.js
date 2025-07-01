let name = {
    firstName: 'Deepthi',
    lastName: 'Purijala',
}

let printFullName = function(hometown, state,  country) {
    console.log(this.firstName + ' ' + this.lastName, 'from', hometown, state, country);
}

let printMyName = printFullName.bind(name, 'Hyderabad', 'Telangana');
printMyName('India'); // Deepthi Purijala from Hyderabad Telangana undefined


// Let's implement our own bind method

// if we keep any method in the Function prototype, we can use it on any function
Function.prototype.myBind = function(...args){
    // here args are used to get arguments passed to the myBind function
    // inside this function, 'this' refers to the function we are calling myBind on
    // so in this example, 'this' refers to printFullName

    let obj = this; // the function we want to bind
    let params = args.slice(1); // the first argument is the object we want to point to, the rest are the arguments we want to pass to the function
    console.log(args[0], 'args')
    // bind should return a new function
    return function(...args2) {
        // here args2 are the arguments passed to the new function using printMyName2
        // it should call the function with the context of the object we want to point to
        // so we can use call or apply method to call the function with the context of the object we want
        obj.apply(args[0], [...params, ...args2]);
    }
}

let printMyName2 = printFullName.myBind(name, 'Hyderabad', 'Telangana');
printMyName2('India'); // Deepthi Purijala from Hyderabad Telangana India