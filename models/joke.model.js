const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "joke is required"],
        minlength: [10, "joke must be at least 10 characters long" ]
    },
    punchline: {
        type: String,
        required: [true, "punch line is required"],
        minlength: [2, "punch line must be at least 2 characters long" ]
    },
}, {timestamps:true});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
