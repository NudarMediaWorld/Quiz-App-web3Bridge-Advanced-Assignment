// Function to shuffle questions using Fisher-Yates algorithm
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Questions array
const questions = [
  {
    question: "What does 'this' refer to in JavaScript?",
    answer: "Current object",
    options: [
      "Global object",
      "Current object",
      "Parent object",
      "Child object",
    ],
  },
  {
    question: "What is null in JavaScript?",
    answer: "An object",
    options: ["A primitive value", "An object", "A function", "A variable"],
  },
  {
    question: "How do you create a private variable in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using var",
      "Using let",
      "Using a closure",
      "Using a constructor",
    ],
  },
  {
    question: "What is the purpose of 'bind' in JavaScript?",
    answer: "Bind a function to a context",
    options: [
      "Bind a function to an argument",
      "Bind a function to a context",
      "Bind a function to a variable",
      "Bind a function to a return value",
    ],
  },
  {
    question: "How do you implement inheritance in JavaScript?",
    answer: "Using prototype",
    options: [
      "Using extends",
      "Using prototype",
      "Using a constructor",
      "Using a closure",
    ],
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer: "Value and reference equality",
    options: [
      "Value equality",
      "Reference equality",
      "Value and reference equality",
      "Neither value nor reference equality",
    ],
  },
  {
    question: "How do you create a dictionary in JavaScript?",
    answer: "Using a literal object",
    options: [
      "Using an array",
      "Using a literal object",
      "Using a function",
      "Using a constructor",
    ],
  },
  {
    question: "What is the purpose of 'hasOwnProperty' in JavaScript?",
    answer: "Check if an object has a property",
    options: [
      "Check if an object has a method",
      "Check if an object is an instance of a class",
      "Check if an object has a property",
      "Check if an object is a function",
    ],
  },
  {
    question: "How do you implement polymorphism in JavaScript?",
    answer: "Using method overriding",
    options: [
      "Using method overloading",
      "Using a constructor",
      "Using a closure",
      "Using method overriding",
    ],
  },
  {
    question:
      "What is the difference between a function and a method in JavaScript?",
    answer: "A function is standalone, a method is attached to an object",
    options: [
      "A function is attached to an object, a method is standalone",
      "A function and a method are interchangeable",
      "A function is a type of method, a method is a type of function",
      "A function is standalone, a method is attached to an object",
    ],
  },
  {
    question:
      "How do you create an array with a specific length in JavaScript?",
    answer: "Using the Array constructor",
    options: [
      "Using the length property",
      "Using a literal array",
      "Using a function",
      "Using the Array constructor",
    ],
  },
  {
    question: "What is the purpose of 'splice' in JavaScript?",
    answer: "Add or remove elements from an array",
    options: [
      "Sort an array",
      "Reverse an array",
      "Join an array",
      "Add or remove elements from an array",
    ],
  },
  {
    question: "How do you implement a singleton pattern in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Proxy' in JavaScript?",
    answer: "Intercept and modify the behavior of an object",
    options: [
      "Create and manage proxies",
      "Implement iterators and generators",
      "Implement decorators",
      "Intercept and modify the behavior of an object",
    ],
  },
  {
    question: "How do you implement a strategy pattern in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Function.prototype.bind' in JavaScript?",
    answer: "Bind a function to a context",
    options: [
      "Bind a function to an argument",
      "Bind a function to a context",
      "Bind a function to a variable",
      "Bind a function to a return value",
    ],
  },
  {
    question: "How do you implement a template pattern in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question:
      "What is the difference between 'var', 'let', and 'const' in JavaScript?",
    answer: "Scope and hoisting",
    options: [
      "Type and value",
      "Scope and hoisting",
      "Function and method",
      "Class and object",
    ],
  },

  {
    question: "How do you create a generator function in JavaScript?",
    answer: "Using the yield keyword",
    options: [
      "Using the return keyword",
      "Using the throw keyword",
      "Using the yield keyword",
      "Using a callback function",
    ],
  },
  {
    question: "What is the purpose of 'Symbol' in JavaScript?",
    answer: "Create unique and immutable values",
    options: [
      "Create mutable and unique values",
      "Create immutable and non-unique values",
      "Create mutable and non-unique values",
      "Create unique and immutable values",
    ],
  },
  {
    question: "How do you implement a proxy pattern in JavaScript?",
    answer: "Using the Proxy object",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using the Proxy object",
    ],
  },
  {
    question: "What is the purpose of 'Reflect' in JavaScript?",
    answer: "Inspect and manipulate objects",
    options: [
      "Create and manage proxies",
      "Implement iterators and generators",
      "Implement decorators",
      "Inspect and manipulate objects",
    ],
  },
  {
    question: "How do you implement an iterator pattern in JavaScript?",
    answer: "Using the Symbol.iterator property",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using the Symbol.iterator property",
    ],
  },
  {
    question:
      "What is the difference between 'for...of' and 'for...in' in JavaScript?",
    answer: "Iterable objects vs enumerable properties",
    options: [
      "Enumerable properties vs iterable objects",
      "Arrays vs objects",
      "Objects vs arrays",
      "Iterable objects vs enumerable properties",
    ],
  },
  {
    question: "How do you create a set data structure in JavaScript?",
    answer: "Using the Set object",
    options: [
      "Using an array",
      "Using an object",
      "Using a function",
      "Using the Set object",
    ],
  },
  {
    question:
      "What is the difference between 'Map' and 'WeakMap' in JavaScript?",
    answer: "Key-value pairs vs weak references",
    options: [
      "Weak references vs key-value pairs",
      "Iterable objects vs non-iterable objects",
      "Non-iterable objects vs iterable objects",
      "Key-value pairs vs weak references",
    ],
  },
  {
    question: "How do you implement a factory pattern in JavaScript?",
    answer: "Using a constructor function",
    options: [
      "Using a closure",
      "Using a literal object",
      "Using a function",
      "Using a constructor function",
    ],
  },
  {
    question: "What is the purpose of 'Object.create' in JavaScript?",
    answer: "Create a new object with a specified prototype",
    options: [
      "Create a new object with a specified constructor",
      "Create a new object with a specified property",
      "Create a new object with a specified method",
      "Create a new object with a specified prototype",
    ],
  },
  {
    question: "How do you implement a decorator pattern in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question:
      "What is the purpose of 'Function.prototype.apply' in JavaScript?",
    answer: "Call a function with a specified context and arguments",
    options: [
      "Call a function with a specified context",
      "Call a function with specified arguments",
      "Call a function with a specified context and arguments",
      "Call a function without a specified context or arguments",
    ],
  },
  {
    question:
      "How do you implement a chain of responsibility pattern in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Promise.all' in JavaScript?",
    answer:
      "Return a promise that resolves when all promises in an array resolve",
    options: [
      "Return a promise that resolves when any promise in an array resolves",
      "Return a promise that rejects when all promises in an array reject",
      "Return a promise that resolves when all promises in an array resolve",
      "Return a promise that rejects when any promise in an array rejects",
    ],
  },
  {
    question: "How do you implement a command pattern in JavaScript?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Array.prototype.reduce' in JavaScript?",
    answer:
      "Apply a function to each element in an array and reduce it to a single value",
    options: [
      "Apply a function to each element in an array and return a new array",
      "Apply a function to each element in an array and return an object",
      "Apply a function to each element in an array and reduce it to a single value",
      "Apply a function to each element in an array and return a promise",
    ],
  },

  {
    question: "What is JavaScript's 'use strict'?",
    answer: "Enforces strict syntax",
    options: [
      "Enforces strict syntax",
      "Ignores syntax errors",
      "Improves performance",
      "None of the above",
    ],
  },
  {
    question: "What is the purpose of 'finally'?",
    answer: "Execute code after try-catch",
    options: [
      "Execute code after try-catch",
      "Catch exceptions",
      "Try code",
      "None of the above",
    ],
  },
  {
    question: "How do you create a JavaScript promise?",
    answer: "Using the Promise constructor",
    options: [
      "Using the Promise constructor",
      "Using async/await",
      "Using callbacks",
      "Using a closure",
    ],
  },
  {
    question: "What is the difference between 'async' and 'await'?",
    answer: "Async defines, await pauses",
    options: [
      "Async defines, await pauses",
      "Async pauses, await defines",
      "Async and await are interchangeable",
      "None of the above",
    ],
  },
  {
    question: "What is the purpose of 'Object.freeze'?",
    answer: "Make an object immutable",
    options: [
      "Make an object immutable",
      "Make an object mutable",
      "Freeze an object's prototype",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript mixin?",
    answer: "Using Object.assign",
    options: [
      "Using Object.assign",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'Symbol.iterator'?",
    answer: "Create an iterator",
    options: [
      "Create an iterator",
      "Create a generator",
      "Create a closure",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript generator?",
    answer: "Using the yield keyword",
    options: [
      "Using the yield keyword",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the difference between 'Map' and 'Set'?",
    answer: "Map has key-value pairs, Set has unique values",
    options: [
      "Map has key-value pairs, Set has unique values",
      "Map has unique values, Set has key-value pairs",
      "Map and Set are interchangeable",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript proxy?",
    answer: "Using the Proxy constructor",
    options: [
      "Using the Proxy constructor",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'Reflect'?",
    answer: "Inspect and manipulate objects",
    options: [
      "Inspect and manipulate objects",
      "Create and manage proxies",
      "Implement iterators and generators",
      "None of the above",
    ],
  },

  {
    question: "What is JavaScript's 'this'?",
    answer: "Current object",
    options: [
      "Global object",
      "Current object",
      "Parent object",
      "Child object",
    ],
  },
  {
    question: "How do you create a JavaScript closure?",
    answer: "Using a function",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'try-catch'?",
    answer: "Handle exceptions",
    options: [
      "Handle exceptions",
      "Handle errors",
      "Handle warnings",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript singleton?",
    answer: "Using a closure",
    options: [
      "Using a constructor",
      "Using a literal object",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the difference between 'null' and 'undefined'?",
    answer: "Null is an object, undefined is a primitive value",
    options: [
      "Null is a primitive value, undefined is an object",
      "Null and undefined are interchangeable",
      "Null is an object, undefined is a primitive value",
      "None of the above",
    ],
  },
  {
    question: "How do you create a JavaScript array?",
    answer: "Using the Array constructor or literal syntax",
    options: [
      "Using the Array constructor or literal syntax",
      "Using a constructor",
      "Using a literal object",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'Array.prototype.forEach'?",
    answer: "Execute a function on each element",
    options: [
      "Execute a function on each element",
      "Sort an array",
      "Reverse an array",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript factory?",
    answer: "Using a constructor function",
    options: [
      "Using a closure",
      "Using a literal object",
      "Using a function",
      "Using a constructor function",
    ],
  },
  {
    question:
      "What is the difference between 'Object.create' and 'Object.assign'?",
    answer: "Create vs copy",
    options: [
      "Create vs copy",
      "Copy vs merge",
      "Merge vs assign",
      "None of the above",
    ],
  },
  {
    question: "How do you create a JavaScript object?",
    answer: "Using literal syntax or the Object constructor",
    options: [
      "Using literal syntax or the Object constructor",
      "Using a constructor",
      "Using a function",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Object.prototype.hasOwnProperty'?",
    answer: "Check if an object has a property",
    options: [
      "Check if an object has a property",
      "Check if an object is an instance of a class",
      "Check if an object has a method",
      "None of the above",
    ],
  },

  {
    question: "What is JavaScript's 'prototype'?",
    answer: "A reference to a parent object",
    options: [
      "A reference to a parent object",
      "A reference to a child object",
      "A reference to a sibling object",
      "None of the above",
    ],
  },
  {
    question: "How do you implement inheritance in JavaScript?",
    answer: "Using prototype",
    options: [
      "Using extends",
      "Using prototype",
      "Using a constructor",
      "Using a closure",
    ],
  },
  {
    question: "What is the difference between '=='' and '==='?",
    answer: "Value vs reference equality",
    options: [
      "Value equality",
      "Reference equality",
      "Value vs reference equality",
      "None of the above",
    ],
  },
  {
    question: "How do you create a JavaScript function?",
    answer: "Using function syntax or an arrow function",
    options: [
      "Using function syntax or an arrow function",
      "Using a constructor",
      "Using a literal object",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Function.prototype.call'?",
    answer: "Call a function with a specified context",
    options: [
      "Call a function with a specified context",
      "Call a function with specified arguments",
      "Call a function without a specified context or arguments",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript module?",
    answer: "Using exports and imports",
    options: [
      "Using exports and imports",
      "Using a constructor",
      "Using a literal object",
      "Using a function",
    ],
  },
  {
    question: "What is the difference between 'CommonJS' and 'ES6 modules'?",
    answer: "Syntax and behavior",
    options: ["Syntax", "Behavior", "Syntax and behavior", "None of the above"],
  },
  {
    question: "How do you create a JavaScript promise?",
    answer: "Using the Promise constructor",
    options: [
      "Using the Promise constructor",
      "Using async/await",
      "Using callbacks",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'Promise.all'?",
    answer: "Return a promise that resolves when all promises resolve",
    options: [
      "Return a promise that resolves when all promises resolve",
      "Return a promise that rejects when all promises reject",
      "Return a promise that resolves when any promise resolves",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript async function?",
    answer: "Using async/await syntax",
    options: [
      "Using async/await syntax",
      "Using promises",
      "Using callbacks",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'async/await'?",
    answer: "Simplify asynchronous code",
    options: [
      "Simplify asynchronous code",
      "Simplify synchronous code",
      "Improve performance",
      "None of the above",
    ],
  },
  {
    question: "How do you create a JavaScript class?",
    answer: "Using class syntax",
    options: [
      "Using class syntax",
      "Using a constructor",
      "Using a literal object",
      "Using a function",
    ],
  },
  {
    question: "What is the difference between 'class' and 'function'?",
    answer: "Syntax and behavior",
    options: ["Syntax", "Behavior", "Syntax and behavior", "None of the above"],
  },
  {
    question: "How do you implement inheritance in a JavaScript class?",
    answer: "Using extends",
    options: [
      "Using extends",
      "Using prototype",
      "Using a constructor",
      "Using a closure",
    ],
  },
  {
    question: "What is the purpose of 'super'?",
    answer: "Call a parent class's method",
    options: [
      "Call a parent class's method",
      "Call a child class's method",
      "Call a sibling class's method",
      "None of the above",
    ],
  },

  {
    question: "What is the purpose of 'static'?",
    answer: "Define a static method or property",
    options: [
      "Define a static method or property",
      "Define an instance method or property",
      "Define a class method or property",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript iterator?",
    answer: "Using Symbol.iterator",
    options: [
      "Using Symbol.iterator",
      "Using a generator function",
      "Using a closure",
      "Using a constructor",
    ],
  },
  {
    question: "What is the purpose of 'for...of'?",
    answer: "Iterate over an iterable object",
    options: [
      "Iterate over an iterable object",
      "Iterate over an array",
      "Iterate over an object",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript generator?",
    answer: "Using a generator function",
    options: [
      "Using a generator function",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'yield'?",
    answer: "Pause and resume a generator function",
    options: [
      "Pause and resume a generator function",
      "Return a value from a generator function",
      "Throw an error from a generator function",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript proxy?",
    answer: "Using the Proxy constructor",
    options: [
      "Using the Proxy constructor",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'Reflect'?",
    answer: "Provide a way to inspect and manipulate objects",
    options: [
      "Provide a way to inspect and manipulate objects",
      "Provide a way to create and manage proxies",
      "Provide a way to implement iterators and generators",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript decorator?",
    answer: "Using a decorator function",
    options: [
      "Using a decorator function",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of '@decorator'?",
    answer: "Apply a decorator to a class or function",
    options: [
      "Apply a decorator to a class or function",
      "Apply a decorator to a property or method",
      "Apply a decorator to a parameter or argument",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript mixin?",
    answer: "Using Object.assign",
    options: [
      "Using Object.assign",
      "Using a closure",
      "Using a constructor",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'Object.assign'?",
    answer: "Copy properties from one object to another",
    options: [
      "Copy properties from one object to another",
      "Merge two objects into one",
      "Clone an object",
      "None of the above",
    ],
  },
  {
    question: "How do you implement a JavaScript interface?",
    answer: "Using a abstract class or interface",
    options: [
      "Using a abstract class or interface",
      "Using a constructor",
      "Using a closure",
      "Using a function",
    ],
  },
  {
    question: "What is the purpose of 'interface'?",
    answer: "Define a contract or interface",
    options: [
      "Define a contract or interface",
      "Define a class or abstract class",
      "Define a function or method",
      "None of the above",
    ],
  },
];

// Shuffle questions before starting the quiz
shuffleQuestions(questions);

// Log to check if shuffling works
console.log(questions);
