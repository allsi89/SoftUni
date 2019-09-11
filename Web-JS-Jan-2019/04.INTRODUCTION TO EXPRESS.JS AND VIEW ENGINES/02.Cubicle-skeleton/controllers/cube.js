const Cube = require('../models/Cube');

function handleErrors(error, res) {
    let errors = [];

    for (const prop in error.errors) {
        errors.push(err.errors[prop].message);
    }

    res.locals.globalErrors = errors;
    res.render('cube/create');
}

module.exports = {
    createGet: (req, res) => {
        res.render('cube/create');
    },
    createPost: (req, res) => {
        const cubeBody = req.body;
        cubeBody.difficulty = Number(cubeBody.difficulty);

        Cube.create(cubeBody)
            .then((c) => {
                res.redirect('/');
            })
            .catch((e) => handleErrors(e, res, cubeBody));
    },
    details: (req, res) => {
        const cubeId = req.params.cubeId;

        Cube.findById(cubeId)
            .then((cube) => {
                res.render('cube/details', cube)
            })
            .catch((e) => handleErrors(e, res, cubeBody));
    }
}