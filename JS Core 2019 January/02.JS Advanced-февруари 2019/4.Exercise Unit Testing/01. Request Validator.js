function validateRequest(request) {

    const uriRegex = /^([\w.]+)$/gm;
    const messageRegex = /^([^<>\\&'"]+)$/gm;

    let validUri = false;
    let validVersion = false;
    let validMessage = false;
    let validMethod = false;

    if (request.hasOwnProperty('method')) {
        validMethod = methodValidation(request);

        if (!validMethod) {
            printErrorMsg('Method');
        }
    } else {
        printErrorMsg('Method');
    }

    if (request.hasOwnProperty('uri')) {
        validUri = uriValidation(request);

        if (!validUri) {
            printErrorMsg('URI');
        }
    } else {
        printErrorMsg('URI');
    }

    if (request.hasOwnProperty('version')) {
        validVersion = versionValidation(request);

        if (!validVersion) {
            printErrorMsg('Version');
        }
    } else {
        printErrorMsg('Version');
    }

    if (request.hasOwnProperty('message')) {
        validMessage = messageValidation(request);

        if (!validMessage) {
            printErrorMsg('Message');
        }
    } else {
        printErrorMsg('Message');
    }

    function methodValidation(request) {
        validMethod = false;

        if (request.method === 'GET' ||
            request.method === 'POST' ||
            request.method === 'DELETE' ||
            request.method === 'CONNECT') {
            validMethod = true;
        }

        return validMethod;
    }

    function uriValidation(request) {
        validUri = false;

        if (request.uri === '*' || uriRegex.test(request.uri)) {
            validUri = true;
        }

        return validUri;
    }

    function versionValidation(request) {
        validVersion = false;

        if (request.version === 'HTTP/0.9' ||
            request.version === 'HTTP/1.0' ||
            request.version === 'HTTP/1.1' ||
            request.version === 'HTTP/2.0') {
            validVersion = true;
        }

        return validVersion;
    }

    function messageValidation(request) {
        validMessage = false;

        if (messageRegex.test(request.message) || request.message === '') {
            validMessage = true;
        }

        return validMessage;
    }

    function printErrorMsg(header) {
        throw new Error(`Invalid request header: Invalid ${header}`);
    }

    if (validMessage && validVersion && validUri && validMethod) {
        return request;
    }
}

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let test1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

let test2 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};

console.log(validateRequest(test1));
