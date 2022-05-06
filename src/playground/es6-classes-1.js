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

const me=new Person('Dipin',20);
const other=new Person();
console.log(me,other);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other.getGreeting());
console.log(other.getDescription());

