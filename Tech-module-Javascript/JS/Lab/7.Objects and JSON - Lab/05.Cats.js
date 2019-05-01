function solve(inputArr) {

    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let catData of inputArr) {
        let [name, age] = catData.split(' ');
        let cat = new Cat(name,age);

        console.log(cat.meow());
    }
}

solve(['Mellow 2', 'Tom 5']);