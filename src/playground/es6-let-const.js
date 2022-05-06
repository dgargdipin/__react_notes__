var nameVar='Andrew';
var nameVar='Mike';

console.log('nameVar', nameVar);


let nameLet='Jen'
nameLet='Julie'
console.log('nameLet',nameLet);


const nameConst='Frank';
console.log('nameConst',nameConst);



function getPetname(){
    var petName='pet';
    return petName
}

getPetname();
// console.log(petName)



//Block scoping
var fullName='Dipin Garg'
if(fullName){
    var firstNameVar=fullName.split(' ')[0]
    console.log(firstNameVar)
}

console.log(firstNameVar)
if (fullName) {
    const firstNameConst = fullName.split(' ')[0]
    console.log(firstNameConst)
}
// console.log(firstNameConst)
console.log(firstNameVar)
if (fullName) {
    const firstNameLet = fullName.split(' ')[0]
    console.log(firstNameLet)
}
// console.log(firstNameLet)


