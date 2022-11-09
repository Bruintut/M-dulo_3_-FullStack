const mongoose = require('mongoose');

const KnightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  picture: { type: String, required: true },
});

const Knight = mongoose.model('knight', KnightSchema);

module.exports = Knight;
