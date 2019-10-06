const cubeModel = require('../models/Cube');

module.exports = {
    home: (req, res) => {
        cubeModel.find()
            .then((cubes) => {
                res.render('index', {cubes});
            })
            .catch((err) => console.log(err));
    },
    about: (req, res) => {
        res.render('about');
    },
    notFound: (req, res) => {
        res.render('not-found');
    },
    getCreate: (req, res) => {
        res.render('create');
    },
    postCreate: (req, res) => {
        const cubeBody = req.body;

        cubeModel.create(cubeBody)
            .then((cube) => {
                res.redirect('/');
            })
    },
    details: (req, res, next) => {
        const cubeId = req.params.id;

        Cube.findById(cubeId)
            .then((cube) => {
                res.render('details', cube)
            })
            .catch((e) => next(e));
    }
};
