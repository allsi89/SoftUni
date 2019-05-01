function solve(arr) {
    let size = arr[0];
    let ladyBugsPositions = arr[1].split(' ').map(Number);
    let ladyBugsArray = [];

    for (let i = 0; i < size; i++) {
        ladyBugsArray.push(0);
    }

    for (let i = 0; i < size; i++) {
        let ladyBugsIndex = ladyBugsPositions[i];

        if (ladyBugsIndex >= 0 && ladyBugsIndex < size) {
            ladyBugsArray[ladyBugsIndex] = 1;
        }
    }
    for (let i = 2; i < arr.length; i++) {
        let [ladyBugIndex, command, jumpLength] = arr[i].split(' ');
        ladyBugIndex = +ladyBugIndex;
        jumpLength = +jumpLength;

        if (ladyBugsArray[ladyBugIndex] !== 1 ||
            ladyBugIndex < 0 || ladyBugIndex >= ladyBugsArray.length) {
            continue;
        }
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            command = command === "right" ? "left" : "right";
        }

        ladyBugsArray[ladyBugIndex] = 0;
        if (command === "right") {
            let newPosition = ladyBugIndex + jumpLength;

            if (ladyBugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition >= 0 && newPosition < ladyBugsArray.length) {
                ladyBugsArray[newPosition] = 1;
            }
        } else {
            let newPosition = ladyBugIndex - jumpLength;

            if (ladyBugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladyBugsArray[newPosition] = 1;
            }
        }
    }
    console.log(ladyBugsArray.join(' '));
}

solve([5, '3',
    '3 left 2',
    '1 left -2']);