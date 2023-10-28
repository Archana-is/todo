const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    _id : String,
    name : String,
    loginId : String,
    password : String,
    mobile : String,
    email : String,
    access : Object,
    acessAvailability : Date
},
{
    timestamps: {
        createdAt: "_created_at",
        updatedAt: "_updated_at"
    },
    versionKey: false
})

module.exports = mongoose.model('User', UserSchema, 'User');
