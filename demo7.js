const student={
    firstName:"Ankit",
    lastName:"Prakash",
    dob:"30th Jan 1995",
    pincode:844119,
    displayName:function(){
       return this.firstName + " " + this.lastName
    }
}
const fullName=student.displayName();
console.log(fullName);