function solve([arg1, arg2]){
   let pollVoters = Number(arg1);
   let numOfFirstPLaceVotes = Number(arg2);
   var secondPlace = numOfFirstPLaceVotes - (numOfFirstPLaceVotes * 0.20);
   var thirdPlace = secondPlace - (secondPlace * 0.10);
   var sum123Place = numOfFirstPLaceVotes + secondPlace + thirdPlace;
   var halfVoters = pollVoters / 2;
   var diff = (sum123Place - halfVoters).toFixed();

   if(diff >= 0){
       console.log(`First three languages have ${(diff)} votes more`);
   }
   else if(sum123Place < halfVoters){
       console.log(`First three languages have ${Math.abs(diff)} votes less of half votes`);
   }
}
solve([888,17]);