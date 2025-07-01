let multiply = function(x, y)  {
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);

// the above code behaves like this:
let multiplyByTwo2 = function(y) {
    let x = 2; // x is set to 2 while binding the function
    console.log(x*y);
}

// so we can call multiplyByTwo with just one argument which is y
multiplyByTwo(5); // 10


// CURRYING USING CLOSURES

let multiply_closure = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByThree= multiply_closure(3); // returns a function that takes y as an argument
multiplyByThree(5); // 15