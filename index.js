
let employeeEval = [
    {name:"Alice",tasksCompleted:8,rating:4.7},
    {name:"Bob",tasksCompleted:4,rating:4.0},
    {name:"Charlie",tasksCompleted:6,rating:3.5},
    {name:"David",tasksCompleted:10,rating:4.9},
    {name:"Eve",tasksCompleted:7,rating:2.8}
 ];

let filteredData = employeeEval.filter(item => item>5);
console.log(filteredData);