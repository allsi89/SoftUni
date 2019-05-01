function equalWords([arg1, arg2]) {
    let word1 = arg1.toLowerCase(arg1);
    let word2 = arg2.toLowerCase(arg2);
    if (word1 == word2){
        console.log("yes");
    } else {
        console.log("no");
    }
}
equalWords(["hello", "Hello"]);