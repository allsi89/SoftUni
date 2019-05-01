function scoreCalculator([arg1]) {
    score = Number(arg1);
    bonus = 0;
    if (score <= 100) {
        bonus = 5;
    } else if (score > 1000) {
        bonus = (0.1 * score);
    } else {
        bonus = (0.2 * score);
    } if (score % 2 == 0) {
        bonus = bonus + 1;
    } else if (score % 10 == 5){
        bonus = bonus + 2;
    }  console.log(bonus);
       console.log(score + bonus);
}
scoreCalculator([270]);