const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AdminSignup/adminsignup');

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

        usernames: String,
        staffIds: String,
        PhoneNumbers: String,
        StaffEmails: String,
		

    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('adminsignup', TweetSchema);