const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
  },
  company: {
    name: { type: String, required: true },
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
}
