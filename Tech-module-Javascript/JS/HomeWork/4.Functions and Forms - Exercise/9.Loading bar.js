function loadingBar(number) {

    console.log(printLoadingBar(number));

    function printLoadingBar(number) {
        let statusBar = number + '%';
        let loadingBarLength = 10;
        let output = '';
        let loadingBar = '';

        if (number < 100) {
            loadingBar = `[${'%'.repeat(number / 10)}${'.'.repeat(loadingBarLength - (number / 10))}]`;
            output = `${statusBar} ${loadingBar}\nStill loading...`;
        } else {
            loadingBar = `[${'%'.repeat(loadingBarLength)}]`;
            output = `${statusBar} Complete!\n${loadingBar}`;
        }
        return output;
    }
}

loadingBar(40);