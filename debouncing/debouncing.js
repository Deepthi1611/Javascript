// Debouncing in JS

let counter = 0;
const getData = () => {
    //calls an api and gets data
    console.log('Fetching data from API', counter++);
}

const debounce = function(getData, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=> {
            getData.apply(context, args);
        }, delay)
    }
}

// If we don’t call clearTimeout, then every function call will queue a new setTimeout, 
// and all of them will run after the delay. That defeats the purpose of debouncing.

// It's also used for infinite scrolling, window resize etc.

const betterFunction = debounce(getData, 300);

// Throttling:
// Baby: Mom give me a piece of chocolate cake
// Mom: No you can get one, only after 1 hour
// (baby wont get a piece of cake no matter how many times she asked, but only after each hour)

// Debouncing:
// Baby: Mom give me a piece of chocolate cake, . . .Mom give me a piece of chocolate cake ... mom give me ...
// Mom: No, You will get a piece of cake only after 1 hour from LAST time you asked for one.


// In case of window resize, if we want to understand how frequently user is resizing the window then
// throttling would make more sense, but if we want to understand user behavior/user pattern - how many times user is resizing the window
// then debouncing would make more sense.