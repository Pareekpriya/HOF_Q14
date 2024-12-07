
const employeeEval = [
    {name:"Alice",tasksCompleted:8,rating:4.7},
    {name:"Bob",tasksCompleted:4,rating:4.0},
    {name:"Charlie",tasksCompleted:6,rating:3.5},
    {name:"David",tasksCompleted:10,rating:4.9},
    {name:"Eve",tasksCompleted:5,rating:2.8}
 ];

const filteredData = employeeEval.filter(item => item.tasksCompleted>5);

const mappedData = filteredData.map(employee => {
    let performance;
  if(employee.rating > 4.5){
      performance = "Excellent";
  }
  else if(employee.rating>3 && employee.rating<4.5){
    performance = "Good";
  }
  else{
    performance = "Needs Improvement";
  }

  return{name:employee.name, performance: performance};
});

const sortedData = mappedData.sort((a,b) => {
    if(a.performance=="Excellent" && b.performance!="Excellent"){
        return -1;
    }
    if(b.performance=="Excellent" && a.performance!= "Excellent"){
        return 1;
    }
    // return a.name.localeCompare(b.name);
});

console.log(sortedData);