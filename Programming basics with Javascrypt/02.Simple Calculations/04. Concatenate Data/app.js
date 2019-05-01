function concatenateData([arg1, arg2, arg3, arg4]) {
    let firstName = arg1;
    let lastName = arg2;
    let age = parseInt(arg3);
    let town = arg4;
    console.log(`You are ${arg1} ${arg2}, a ${arg3}-years old person from ${arg4}.`);
}
concatenateData(["Petar", "Jijev", 30, "Plovdiv"]);