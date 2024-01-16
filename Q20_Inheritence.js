class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    displayPerson(){
        console.log("Person name:", this.name, " and age: ",this.age);
    }
    PersonDemo(){
        console.log("Person Class");
    }
}
class students extends Person{
    constructor(sName, sAge){
    super(sName,sAge);
     this.sName=sName;
     this.sAge=sAge;
    }
    displayStudent(){
     console.log("Student name:", this.sName, " and age", this.sAge);
    }
}

const s1=new students("Ankit",28);
s1.displayStudent();
s1.displayPerson();
const s2=new students("Ankur",25);