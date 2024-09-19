import  Human from'./Human.js'

class Man extends Human{
    constructor(name, age, weight) {
        super(name, age, weight, "man")
    }
    greeeting(){
        return `Приві! Я ${this.name}, мені ${this.age} років`
    }
}

export default Man