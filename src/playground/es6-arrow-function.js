const square=function(i){
    return i*i;
};
const squareArrow=(i)=>{
    return i*i;
}
const squareArrowConcise=(i)=>i*i;
console.log(square(10));
console.log(squareArrow(8));
console.log(squareArrowConcise(7));



const getFirstName=(str)=>{
    return str.split(' ')[0];
}
const getFirstNameConcise=(str)=>str.split(' ')[0];

console.log(getFirstName('ABC asdasd'));
console.log(getFirstNameConcise('ABCD asdasd'));