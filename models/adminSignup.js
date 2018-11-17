const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdminSchema = new Schema ({
    username: {
        type: String,
        default: 'Admin'
    },
    staffId: {
        type: String,
        required: true
    },
    phoneNumber: String,
    staffEmail: String,
    password: {
        type: String,
        required: true
    },
    is_super: {
        type: Boolean,
        default: false
    },
    createdDate:{
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('adminsignup', AdminSchema);