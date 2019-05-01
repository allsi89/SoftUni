function solve(arr) {
    arr = arr[0].split(' ');
    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currentEl = arr[i];
        let currentSequence = [currentEl];

        for (let j = i + 1; j < arr.length; j++) {
             let nextEl = arr[j];
             
             if (nextEl === currentEl) {
                 currentSequence.push(nextEl);
             }else {
                 break;
             }
        }
        if (currentSequence.length > longestSequence.length){
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
                longestSequence.push(currentSequence[j]);
            }
        }
    }
    console.log(longestSequence.join(' '));
}
solve(['1 1 1 2 3 1 3 3']);