function solve(array) {

    let homesToVisit = Number(array[0]);
    let initialPresents = Number(array[1]);
    
   
    let homesVisited = 0;
    let presentsToGet = 0;
    let timesBack = 0;
    let additionalPresents = 0;

    for (var i = 2; i <= array.lenght - 1; i++) {

        homesVisited++;
        let numOfSocks = array[i];
        let remainingHomes = homesToVisit - homesVisited;
        let currentPresents = initialPresents - numOfSocks;

        if (currentPresents < numOfSocks) {

            presentsToGet = (initialPresents / homesVisited) * (remainingHomes + numOfSocks);
        }
       
    }
    console.log(timesBack);
    console.log(additionalPresents);



} solve(5, 20, 2, 1, 3, 9, 5);