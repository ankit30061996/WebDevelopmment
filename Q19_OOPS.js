class student {
    constructor(firstName, lastName){
      this.firstName=firstName;
      this.lastName=lastName;
    }
    displayFullName(){
        console.log(this.firstName+" "+this.lastName);
    }
}
const s1 = new student("Ankit","Prakash");
s1.displayFullName();
const s2 = new student("Ankur","Prakash");
s2.displayFullName();