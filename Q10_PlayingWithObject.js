let employee = {
    name:"Ankit Prakash",
    role:"Programmer",
    company:"CodeWithAnkit"
}


for (const key in employee) { 
    const element=employee[key];
        //console.log(key);
        //console.log(element);
       console.log(key,element);       
    }