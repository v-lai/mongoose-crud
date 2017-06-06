var mongoose = require("mongoose")
var db = require('./')

var tacoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numToppings: Number,
  eater: {
    ref: 'Eater',
    type: mongoose.Schema.Types.ObjectId
  }
})

tacoSchema.pre('remove', function(next){
  var self = this
  // remove the id from the array of tacos for the eater of this taco
  db.Eater.findById(this.eater).then(function(eater){
    eater.tacos.remove(self.id)
    eater.save().then(function(e){
      next()
    })
  })
})

var Taco = mongoose.model('Taco', tacoSchema);

module.exports = Taco