import mongoose from 'mongoose';

const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  cart: {
    type: Array,
    of: Object,
  }
  favorites: {
    type: Array,
    of: Object,
  }
})

const reviewsModel = mongoose.model('users', usersSchema)

export default reviewsModel