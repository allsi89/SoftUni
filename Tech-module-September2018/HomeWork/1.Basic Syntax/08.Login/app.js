function login(array) {

    let username = array[0];
    let password = '';

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    let counter = 0;

    for (let i = 1; i <= array.length - 1; i++) {
        let currentUsername = array[i];
        counter++;

        if (currentUsername === password) {
            console.log(`User ${username} logged in.`);
            break;
        }
        if (counter === 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}
login(['Acer', 'login', 'go', 'let me in', 'sgege']);