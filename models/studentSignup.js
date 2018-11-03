const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/adminSignup/studentssignup');

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

        surnames: String,
        middlenames: String,
        others: String,
        facultys: String,
        depts: String,
        matrics: String,
        PhoneNumbers: String,
        Emails: String,

    createdDate:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('studentssignup', TweetSchema);