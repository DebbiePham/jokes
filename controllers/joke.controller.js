const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            console.log(newlyCreatedJoke);
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}

// function to get a random joke
module.exports.getRandomJoke = (req, res) => {
    Joke.find()
    .then((allJokes) => {
        const jokesLength = allJokes.length;
        const randomIndex = Math.floor(Math.random() * jokesLength);
        const randomJoke = allJokes[randomIndex];
        res.json({ joke: randomJoke })
    })
    .catch((err) => {
        res.json(err)
    });
}
