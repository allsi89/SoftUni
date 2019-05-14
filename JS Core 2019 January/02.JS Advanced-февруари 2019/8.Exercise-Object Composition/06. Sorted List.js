function sortedList() {
    let collection = (() => {
        let numbers = [];
        let size = 0;

        const add = function(element) {
            numbers.push(element);
            numbers.sort((a, b) => a - b);
            this.size++;
        };

        const remove = function(index){
            validateIndex(index);
            numbers.splice(index, 1);
            this.size--;
        };

        const get = function(index){
            validateIndex(index);
            return numbers[index];
        };

        const validateIndex = function(index) {
            if (index < 0 || index >= numbers.length) {
                throw new RangeError('Index is outside the bounds ofthe array!');
            }
        };

        return {
            add,
            remove,
            get,
            size
        }
    })();

    return collection;
}

let list = sortedList();
list.add(4)
list.add(3)
list.remove(1)
console.log(list.size);

let firstPosition = list.get(0);
let size = list.size;