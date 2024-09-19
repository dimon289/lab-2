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
    getInfo(prop){
        return prop == null ?{name:this.name, age:this.age, weight:this.weight, gender:this.gender}: this[prop];
    }
    greeeting(){
        return "Hi!"
    }
}

class Man extends Human{
    constructor(name, age, weight) {
        super(name, age, weight, "man")
    }
    greeeting(){
        return `Приві! Я ${this.name}, мені ${this.age} років`
    }
}

class Woman extends Human{
    constructor(name, age, weight) {
        super(name, age, weight, "woman")
    }
    greeeting(){
        return `Приві! Я ${this.name}`
    }
}




// let Dima = new Human("Дмитро", 18, "80kg", "man")

// console.log(Dima.grtInfo(null))
// console.log(Dima.grtInfo("name"))
// console.log(Dima.greeeting())


// let Illa = new Man("Ілля", 19, "55kg");
// let Ulianna = new Woman("Юліанна", 18, "60kg");
// console.log(Illa.greeeting());
// console.log(Ulianna.greeeting());



let list = [
    new Man("Dima", 18, "98kg"),
    new Man("Oleg", 30, "157kg"),
    new Man("Illa", 19, "63kg"),
    new Woman("Jullia", 25, "75kg"),
    new Man("Bogdan", 44, "93kg"),
    new Woman("Natalia", 35, "88kg"),
    new Man("Rostic", 25, "94kg"),
    new Woman("Sasha", 20, "56kg"),
    new Woman("Anya", 19, "80kg"),
    new Woman("Polina", 14, "52kg"),
    new Man("Artem", 14, "61kg"),
    new Man("Oleksandr", 33, "95kg"),
    new Woman("Katerina", 27, "91kg"),
    new Man("Dmitro", 38, "82kg"),
    new Woman("Jullia", 22, "119kg"),
];


const search = (list, searchField, searchValue) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(list.some((item) => item[searchField] === searchValue)){
                resolve(list.filter((item) => item[searchField] === searchValue));
            }
            else{
                reject((`таких елементів за пошуком ${searchField}:${searchValue} не знайдено`))
            }
        }, executingTime = 300);
    });
}



search(list, "name", "Jullia")
    .then(e => e.forEach(element => console.log(element.getInfo(null))))
    .catch(r => console.log(r))

search(list, "nam", "Jullia")
    .then(e => e.forEach(element => console.log(element.getInfo(null))))
    .catch(r => console.log(r))


