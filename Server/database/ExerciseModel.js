const mongoose = require('mongoose');
// init const Schema as Schema constructor
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Export user model through module.exports
// The collection name should be 'user'
module.exports = mongoose.model('user', userSchema);
