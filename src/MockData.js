const questions = [
    {
        title: "number return 5",
        type: "number",
        instructions: "create a function that return the number 5",
        answer: 5,
        startup: "function number() {\n//code here \n} \n\n number()",
        id: 1
    },
    {
        title: "return hello world",
        type: "string",
        instructions: "create a function that return a string of 'hello world'",
        answer: 'hello world',
        startup: "function string() {\n//code here \n} \n\n string()",
        id: 2
    },
    {
        title: "return the sum",
        type: "array",
        instructions: "create a function that returns the sum of the array numbers that is given to you",
        answer: 21,
        startup: "\nfunction sum() {\nvar number = [1,2,3,4,5,6]\n//code here \n} \n\n sum()",
        id: 3
    },
    {
        title: "number return the first index",
        type: "number",
        instructions: "create a function that returns the first index element from the given array",
        answer: 1,
        startup: "function first() {\nlet number = [1,2,3,4,5,6]\n//code here \n} \n\n first()",
        id: 4
    },
    {
        title: "number return a 3",
        type: "number",
        instructions: "create a function that returns return the number 3 from the function",
        answer: 3,
        startup: "function number() {\n//code here \n} \n\n number()",
        id: 5
    },
    {
        title: "join the the array",
        type: "number",
        instructions: "create a function that returns the array to one string",
        answer: "hello",
        startup: "function join() {\nlet number = ['h', 'e', 'l', 'l', 'o']\n//code here \n} \n\n join()",
        id: 6
    },
    {
        title: "remove last letter",
        type: "number",
        instructions: "create a function that removes the last letter from the string of hello",
        answer: "hell",
        startup: "function letter() {let letter = 'hello'\n//code here \n} \n\n letter()",
        id: 7
    },
    {
        title: "add the two number",
        type: "number",
        instructions: "create a function that adds the two numbers given to you in the function",
        answer: 12,
        startup: "function number() {\nlet numone = 6\nlet numtwo = 6\n//code here \n} \n\n number()",
        id: 8
    },
    {
        title: "round down the number",
        type: "number",
        instructions: "create a function that rounds that given number down",
        answer: 3,
        startup: "function number() {\n let num = 3.7 \n//code here \n} \n\n number()",
        id: 9
    },
    {
        title: "round up the number",
        type: "number",
        instructions: "create a function that rounds that given number up",
        answer: 5,
        startup: "function number() {\nlet num = 4.1 \n//code here \n} \n\n number()",
        id: 10
    }
]

export default questions;