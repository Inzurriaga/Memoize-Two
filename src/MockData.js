const questions = [
    {
        title: "number return 5",
        type: "number",
        instructions: "return the number 5",
        answer: 5,
        startup: "function number() {}",
        id: 1
    },
    {
        title: "return hello world",
        type: "string",
        instructions: "return a string of 'hello world'",
        answer: "hello world",
        startup: "function number() {}",
        id: 1
    },
    {
        title: "return object",
        type: "object",
        instructions: "return an object that is empty",
        answer: {},
        startup: "function number() {}",
        id: 1
    },
    {
        title: "return an array",
        type: "array",
        instructions: "return an array with three element of 1 2 3",
        answer: [1,2,3],
        startup: "function number() {}",
        id: 1
    },
    {
        title: "number return a 3",
        type: "number",
        instructions: "return the number 3 from the function",
        answer: 3,
        startup: "function number() {}",
        id: 1
    }
]

export default questions;