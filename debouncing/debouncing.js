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