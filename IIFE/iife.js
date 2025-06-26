// Immediately Invoked Function Expression (IIFE) example
// IIFE function should end with a semicolon because it gets invoked immediately but 
// it does not know where to end the context

// named IIFE
(function iife() {
    console.log('DB connected')
} ) ();

// unnamed IIFE
( (name)=> {
    console.log('DB connected from arrow function', name)
}
) ('Deepthi'); // passing argument to IIFE