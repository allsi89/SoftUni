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
    details: (req, res) => {
        const id = req.params.id;

        cubeModel.findById(id)
            .then((cube) => {
                res.render('details', cube);
            })
            .catch((err) => console.log(err));
    }
};
