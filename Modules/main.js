import Man from "./Man.js"
import Woman from "./Woman.js"

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

const executingTime = 300;

const search = (list, searchField, searchValue) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            if(list.some((item) => item[searchField] === searchValue)){
                resolve(list.filter((item) => item[searchField] === searchValue));
            }
            else{
                reject((`таких елементів за пошуком ${searchField}:${searchValue} не знайдено`))
            }
        }, executingTime);
    });
}



search(list, "name", "Jullia")
    .then(e => e.forEach(element => console.log(element.getInfo(null))))
    .catch(r => console.log(r))

search(list, "nam", "Jullia")
    .then(e => e.forEach(element => console.log(element.getInfo(null))))
    .catch(r => console.log(r))