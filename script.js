const year = 2024;

const func = (name, birth = 10) =>{
    return `Я ${name}, мені ${birth} років`
}

console.log(func("Дмитро", 18))
console.log(func("Дмитро"))