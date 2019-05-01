function isValid([arg1]) {
    let isValid = (Number(arg1) >= 100 && Number(arg1) <= 200 || Number(arg1) == 0);
    if (!isValid) {
        console.log("invalid");
    }    
}
isValid([200]);