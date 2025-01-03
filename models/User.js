const mongoose = require('mongoose');


const DataSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    FullName: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('Users', DataSchema);
User.createIndexes();
module.exports = User;