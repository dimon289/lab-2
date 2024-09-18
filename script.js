const year = 2024;

// const func = (name, yearOfBirth = 2000) =>{
//     return `Я ${name}, мені ${year-yearOfBirth} років`
// }

// console.log(func("Дмитро", 2006))
// console.log(func("Дмитро"))


class Human {
    constructor(name, age, weight, gender) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.gender = gender
    }
    grtInfo(prop){
        return prop == null ?{name:this.name, age:this.age, weight:this.weight, gender:this.gender}: this[prop];
    }
    greeeting(){
        return "Hi!"
    }
}

let Dima = new Human("Дмитро", 18, "80kg", "man")

console.log(Dima.grtInfo(null))
console.log(Dima.grtInfo("name"))
console.log(Dima.greeeting())

