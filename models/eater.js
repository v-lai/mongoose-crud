var mongoose = require("mongoose")

var eaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  favoriteTopping: String
})

var Eater = mongoose.model('Eater', eaterSchema)

module.exports = Eater