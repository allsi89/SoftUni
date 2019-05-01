function sumSeconds([arg1, arg2, arg3]) { 
     time1 = Number(arg1);
     time2 = Number(arg2);
     time3 = Number(arg3);
    let minutes = 0;
    let totalTime = time1 + time2 + time3;
    if (totalTime >= 60) {
    minutes++;
    totalTime -= 60;
    }
    if (totalTime >= 60) {
    minutes++;
    totalTime -= 60;
    }
    if (totalTime < 10) {
    console.log(`${minutes}:0${totalTime}`);

    } else {
    console.log(`${minutes}:${totalTime}`);
    
    }
}
sumSeconds([10, 20, 40]);