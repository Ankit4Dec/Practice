/// Q1---- var , let & const Quesion example


function example(){
    if(true){
        var message = "Hello World";
    }
    console.log(message);
}

example();  /// we can access var outside of the block.

let x =1;
x=2;
console.log(x);  /// output will be 2 , because re-initialization is allow in let case.

const y = 4;
// y = 5;
console.log(y);   /// it will throw an error, because const can not allow re-declartion or re-initialization. 




/// Q2----  Arrow Function Example


 //  declaration of arrow function;
const add =(x,y)=>{
    return x+y;
}

// using an arrow function 
const result = add(5,6);
console.log(result);


// Q3---- Difference between == and ===

console.log(1 == "1");   // In this example, 1 and "1" are not same type (one is a number and one is string), but == performs type coercion and coverts the string to a number and before making the comparison.

console.log(1 === "1");  // In this example, === is the strict equality operator, which means that it does not perfrom type coerction when comparison values. This means that it will only return true if the operands are of the same type and have the same value.


// Q4----  Reverse a string in JS

const str =  "hello";
const rev =  str.split("").reverse().join("");
console.log(str);
console.log(rev);


// Q5----  Closer ( VVVVVVV IMPORTANT)

function outer(){
    const name = "Alice";

    function inner(){
        console.log(name)
    }

    return inner;

}

const innerFunc = outer();
innerFunc();


// Q6---- " this "  Keyword in JS

const person = {
    name: "Alive",
    greet: function(){
        console.log(`Hello , my name is ${this.name}`);
    }
};

person.greet();



function greet(){
    console.log(`Hello, my name is ${this.name}`);
}

const person1 = {name:"Alice"};
const person2 = {name: "Bob"};

greet.call(person1);
greet.call(person2);


// Q7 ----- SYNCHRONOUS & ASYNCRONOUS CODE

// Example of Synchronous Code:

console.log("Line 1")
console.log("Line 2")
console.log("Line 3")


// Example of Asynchronous Code using callback

console.log("Another line for Asynchronous");
setTimeout(()=>{
    console.log("Calling Callback after 5 Second")
},5000);
console.log("Ending line of Asynchronous Code Example, But it will reflect before callout")
console.log("Code will come afer 5 Second, Please Wait")


// Q8 ---- Promise in JS

const promise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        reject("Ye Galat ho gaya");
    }, 5000)
});

promise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})


// Q9 ---- Callback function in JS

function doSomething(callback){
    setTimeout(()=>{
        callback("Ye Callback call ho raha hai")
    },5000);
}

doSomething((result)=>{
    console.log(result);
})

// Q10 ---- How would you check if a variable is an array in JavaScript

const arr = [1,22,3];

console.log(Array.isArray(arr));
console.log(Array.isArray("hello"));