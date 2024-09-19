import  Human from'./Human.js'

class Woman extends Human{
    constructor(name, age, weight) {
        super(name, age, weight, "woman")
    }
    greeeting(){
        return `Приві! Я ${this.name}`
    }
}

export default Woman