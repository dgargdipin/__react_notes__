class Person{
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
        // return 'Hi! from '+this.name;
        return `Hi! from ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        if(!this.hasMajor())return super.getDescription();
        return `${this.name} is ${this.age} years old is in ${this.major} branch.`;

    }

}
class WithoutConstructorClass{

    ret3(){
        this.a=3;
        return 3;
    }

    accessThis(){
        console.log(this)
    }
    

}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation=homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.hasHomeLocation()){
            greeting+=`I come from ${this.homeLocation}.`
        }
        return greeting;

    }
}
const me=new Student('Dipin',20,'CSE');
const other=new Student();
const traveller1=new Traveller('t1',20,'Delhi');
const traveller2=new Traveller('t2',20);

console.log(me,other);
console.log(me.hasMajor())
console.log(me.getDescription())
console.log(other.hasMajor())
console.log(other.getDescription())
console.log(traveller1.getGreeting())
console.log(traveller2.getGreeting())
// console.log(me.getGreeting());
// console.log(me.getDescription());
// console.log(other.getGreeting());
// console.log(other.getDescription());

const WithoutConstructorClassInstance = new WithoutConstructorClass();
WithoutConstructorClassInstance.ret3()
WithoutConstructorClassInstance.accessThis()