const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatrixSchema = Schema({
  userToken: {type: String, require: true},
  value: [[{}]]
});

const Matrix = mongoose.model('Matrix', MatrixSchema);

module.exports = Matrix;
