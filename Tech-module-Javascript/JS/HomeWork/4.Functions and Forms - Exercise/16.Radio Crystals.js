function solve(arr) {
    let targetThick = +arr[0];
    let cutCounter = 0;
    let lapCounter = 0;
    let grindCounter = 0;
    let etchCounter = 0;

    for (let i = 1; i < arr.length; i++) {
        let chunk = +arr[i];

        console.log(`Processing chunk ${chunk} microns`);
        if (chunk >= targetThick * 4) {
            chunk = cutting(chunk);
            chunk = transportAndWash(chunk);
            console.log(`Cut x${cutCounter}`);
            console.log('Transporting and washing');

            if (targetThick === chunk) {
                console.log(`Finished crystal ${targetThick} microns`);
            }
        }
        if (chunk >= targetThick * 1.20) {
            chunk = lap(chunk);
            chunk = transportAndWash(chunk);
            console.log(`Lap x${lapCounter}`);
            console.log('Transporting and washing');

            if (targetThick === chunk) {
                console.log(`Finished crystal ${targetThick} microns`);
            }
        }
        if (chunk >= targetThick + 20) {
            chunk = grind(chunk);
            chunk = transportAndWash(chunk);
            console.log(`Grind x${grindCounter}`);
            console.log('Transporting and washing');

            if (targetThick === chunk) {
                console.log(`Finished crystal ${targetThick} microns`);
            }
        }
        if (chunk >= targetThick + 1) {
            chunk = etch(chunk);
            chunk = transportAndWash(chunk);
            console.log(`Etch x${etchCounter}`);
            console.log('Transporting and washing');

            if (targetThick === chunk) {
                console.log(`Finished crystal ${targetThick} microns`);
            }
        }
        if (targetThick > chunk) {
            chunk = xRay(chunk);
            chunk = transportAndWash(chunk);
            console.log('X-ray x1');

            if (targetThick === chunk) {
                console.log(`Finished crystal ${targetThick} microns`);
            }
        }
        cutCounter = 0;
        etchCounter = 0;
        lapCounter = 0;
        grindCounter = 0;
    }

    function cutting(chunk) {

        while (chunk >= targetThick * 4) {
            chunk /= 4;
            cutCounter++;
        }
        return chunk;
    }

    function lap(chunk) {
        while (chunk >= targetThick * 1.20) {
            chunk *= 0.8;
            lapCounter++;
        }
        return chunk;
    }

    function grind(chunk) {
        while (chunk >= targetThick + 20) {
            chunk -= 20;
            grindCounter++;
        }
        return chunk;
    }

    function etch(chunk) {
        while (chunk >= targetThick + 1) {
            chunk -= 2;
            etchCounter++;
        }
        return chunk;
    }

    function xRay(chunk) {
        return chunk + 1;
    }

    function transportAndWash(chunk) {
        chunk = Math.trunc(chunk);
        return chunk;
    }
}

solve([1375, 50000]);