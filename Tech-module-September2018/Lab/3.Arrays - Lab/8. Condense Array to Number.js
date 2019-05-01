function solve(arr) {
    let lenght = arr.length;

    do {
        for (let i = 0; i < lenght - 1; i++) {
            arr[i] = arr[i] + arr[i + 1];
        }
        lenght--;
    }while (lenght > 1){

    console.log(arr[0]);
    }
}
solve([112,12]);