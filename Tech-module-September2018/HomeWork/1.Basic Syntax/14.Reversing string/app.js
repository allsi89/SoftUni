
function reverseString(str) {

    let result = str.split("").reverse().join("");
    console.log(result);
}
reverseString("hello");

                    //  second way to reverse a string

//function reverseString(str) {
//    var newString = "";
//    for (var i = str.length - 1; i >= 0; i--) {
//        newString += str[i];
//    }
//    console.log(newString);
//
//}
//reverseString('hello');