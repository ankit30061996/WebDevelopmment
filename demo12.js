class Student{
    constructor(firstName,secondName){
        this.firstName=firstName;
        this.secondName=secondName;
    }

displayFullName(){
    console.log(this.firstName+" "+this.secondName)
}
}
const s1=new Student("Ankit","Prakash")
s1.displayFullName();
const s2=new Student("Ankur", "Prakash")
s2.displayFullName(); 