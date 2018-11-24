const mongoose = require('mongoose');
const bcrypt = require("bcrypt-nodejs")
const Schema = mongoose.Schema;

let AdminSchema = new Schema ({
    name: {
        type: String,
        trim: true,
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

AdminSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

AdminSchema.methods.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('Admin', AdminSchema);