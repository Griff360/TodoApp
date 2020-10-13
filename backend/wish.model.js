const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Wish = new Schema({
  wish_toy: {
    type: String
  },
  wish_from: {
    type: String
  },
  wish_priority: {
    type: String
  },
  wish_fulfilled: {
    type: Boolean
  }
})
module.exports = mongoose.model('Wish', Wish);
