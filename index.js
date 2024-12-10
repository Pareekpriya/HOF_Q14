
const employeeEval = [
    {name:"Alice",tasksCompleted:8,rating:4.7},
    {name:"Bob",tasksCompleted:4,rating:4.0},
    {name:"Charlie",tasksCompleted:6,rating:3.5},
    {name:"David",tasksCompleted:10,rating:4.9},
    {name:"Eve",tasksCompleted:5,rating:2.8}
 ];

const filteredData = employeeEval.filter(item => item.tasksCompleted>5);

const mappedData = filteredData.map(employee => {
    return {
      name:employee.name,
      performanceLevel:employee.rating>4.5?"Excellent":employee.rating>3 && employee.rating<4.5?"Good":"Needs IMprovement"
    }
     
});

const sortedData = mappedData.sort((a,b) => {
    if(a.performanceLevel>b.performanceLevel){
        return 1;
    }
   else if(a.performanceLevel<b.performanceLevel){
        return -1;
    }
    else{
      return 0
    }
});

console.log(sortedData);