const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    daily: {
        type: Boolean,
        validate() {
            return this.weekly || this.daily;
        }
    },
    weekly: {
        type: Boolean,
        validate() {
            return this.weekly || this.daily;
        }
    },
    url: {
        type: String,
        required: true
    },
    timeZone: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("emailSchema", emailSchema)
