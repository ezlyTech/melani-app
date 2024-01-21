import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  email: String,
  cart: {
    type: Array,
    of: Object,
  },
  favorites: {
    type: Array,
    of: Object,
  },
})

const usersModel = mongoose.model('users', usersSchema)

export default usersModel