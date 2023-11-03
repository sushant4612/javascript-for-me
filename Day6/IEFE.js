//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

//use cases:- Avoid polluting the global namespace

// (function defination)(function call)
(() => (console.log("DB connected")))();

//and important thing is that we have to add ; at the end to tell that we have to end the context

//another example

console.log(( (num1,num2) => (num1 + num2))(7,8));


// named IIFE are those which have named and without named is called IIFE