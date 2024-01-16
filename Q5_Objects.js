const student={
    "FirstName": "Ankit",
    "LastName": "Prakash",
    "Branch": "CS",
    "PassOutYear":2021,
    displayName:function(){
        return this.FirstName+" "+this.LastName
    }
}
console.log(student["FirstName"]);
console.log(student.FirstName);
console.log(student);
const FullName=student.displayName();
console.log(FullName);