const add=function(a,b){
    console.log(arguments)
    return a+b;
};

console.log(add(55,1,1001));

const addArrow = (a, b)=> {
    // console.log(arguments)
    return a + b;
};


const user={
    name:'Andrew',
    cities:['Delhi','Noida'],
    printPlacesLived:function(){// cannot use arrow fn here
        console.log(this.name)
        console.log(this.cities)
        const that=this;
        this.cities.forEach(function(city){
            console.log(that.name+' has lived in '+ city);

        })
        this.cities.forEach((city)=>{
            console.log(this.name+' has lived in '+ city);

        })

    },
    printPlacesLivedConcise(){// same as above
        console.log(this.name)
        console.log(this.cities)
        const that=this;
        this.cities.forEach(function(city){
            console.log(that.name+' has lived in '+ city);

        })
        this.cities.forEach((city)=>{
            console.log(this.name+' has lived in '+ city);

        })

    }
}

user.printPlacesLived()
user.printPlacesLivedConcise()


const user2={
    name: 'Andrew',
        cities: ['Delhi', 'Noida'],
            printPlacesLived: function() {// cannot use arrow fn here
                console.log(this.name)
                console.log(this.cities)
                const that = this;
                this.cities.forEach(function (city) {
                    console.log(that.name + ' has lived in ' + city);

                })
                this.cities.forEach((city) => {
                    console.log(this.name + ' has lived in ' + city);

                })

            },
    getCities(){// same as above
        return this.cities.map((city)=> this.name + ' has lived in ' + city)
        

    }
}

console.log(user2.getCities());




const multiplier={
    numbers:[1,2,3,4],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((item)=>item*this.multiplyBy);
    }
}

console.log(multiplier.multiply())