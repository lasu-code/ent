const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/adminSignup/studentvocation');

const Schema = mongoose.Schema;

let TweetSchema = new Schema ({

		vocations: String,
        matrics: String,
        

    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('studentvocation', TweetSchema);