const FilmStudio = require('./filmStudio');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe("FilmStudio", function () {
    let film = new FilmStudio('Peshakof');

    it('should has the same name as expected', function () {
        assert.equal(film.name,'Peshakof');
    });

    it('should have prop "name" ', function () {
        assert.property(film, 'name');
    });

    it('should have prop "films"', function () {
        assert.property(film, 'films');
    });

    it('prop "films" must be array', function () {
        assert.isArray(film.films);
    });

    it('films must be empty at the initialise', function () {
        assert.equal(film.films.length, 0);
    });

    describe("makeMovie", function () {
        let movieStudio;
        beforeEach(() => {
            movieStudio = new FilmStudio('Pesho');
        });

        it("standard", function () {
            let result = movieStudio.makeMovie('GoT', ['Dancheto', 'Jon_Snow']);
            let expected = {
                filmName: 'GoT',
                filmRoles: [
                    {role: 'Dancheto', actor: false},
                    {role: 'Jon_Snow', actor: false}
                ]
            };

            assert.deepEqual(result, expected);
        });

        it('should increment the number of the movie part if we pass the same movie name', function () {
            movieStudio.makeMovie('GoT', ['Dancheto', 'Jon_Snow']);
            let result = movieStudio.makeMovie('GoT', ['Dancheto', 'Jon_Snow', 'Podrick']);
            let expected = {
                filmName: 'GoT 2',
                filmRoles: [
                    {role: 'Dancheto', actor: false},
                    {role: 'Jon_Snow', actor: false},
                    {role: 'Podrick', actor: false}
                ]
            };

            assert.deepEqual(result, expected);
        });

        it('should return error if we pass less than 2 arguments', function () {

            assert.throw(() => movieStudio.makeMovie('gosho'), 'Invalid arguments count')
        });

        it('should return error if first argument !== string || second argument !== array', function () {

            assert.throw(() => movieStudio.makeMovie(45, 'alen delon'), 'Invalid arguments');
            assert.throw(() => movieStudio.makeMovie('45', {}), 'Invalid arguments');

        });
    });

    describe('casting', function () {
        let movieStudio;
        beforeEach(() => {
            movieStudio = new FilmStudio('Pesho');
        });

        it('should return error if there is no films', function () {
            assert.equal(movieStudio.casting('Pesho', 'Gosho'), `There are no films yet in Pesho.`);
        });

        it('should return error if there is no such role', function () {
            movieStudio.makeMovie('speed', ['badGuy', 'goodGuy']);
            assert.equal(movieStudio.casting('pesho', 'asshole'), `pesho, we cannot find a asshole role...`)
        });

        it('standard', function () {
            movieStudio.makeMovie('speed', ['badGuy', 'goodGuy']);
            let expected = `You got the job! Mr. Kiro you are next goodGuy in the speed. Congratz!`;
            assert.equal(movieStudio.casting('Kiro', 'goodGuy'), expected);
        });
    });

    describe('lookForProducer', function () {
        let movieStudio;

        beforeEach(() => {
            movieStudio = new FilmStudio('Pesho');
        });

        it('should throw error if the producer did not exists', function () {
            assert.throw( () => movieStudio.lookForProducer('Ivan'), `Ivan do not exist yet, but we need the money...`);
        });

        it('standard', function () {
            movieStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']);

            let result = movieStudio.lookForProducer('The Avengers');

            assert.equal(result, 'Film name: The Avengers\n' +
                'Cast:\n' +
                'false as Iron-Man\n' +
                'false as Thor\n' +
                'false as Hulk\n' +
                'false as Arrow guy\n')
        });
    })
});
