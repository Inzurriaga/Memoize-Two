const questions = [
    {
        title: "number return 5",
        type: "number",
        instructions: "return the number 5",
        answer: 5,
        startup: "function number() {\n//code here \n} \n\n number()",
        id: 1
    },
    {
        title: "return hello world",
        type: "string",
        instructions: "return a string of 'hello world'",
        answer: 'hello world',
        startup: "function string() {}",
        id: 2
    },
    {
        title: "return an array",
        type: "array",
        instructions: "return an array with three element of 1 2 3",
        answer: [1,2,3],
        startup: "function array() {}",
        id: 4
    },
    {
        title: "number return a 3",
        type: "number",
        instructions: "return the number 3 from the function",
        answer: 3,
        startup: "function number() {}",
        id: 5
    }
]

export default questions;