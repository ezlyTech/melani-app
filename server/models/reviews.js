import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewsSchema = new Schema({
  itemID: String,
  itemName: String,
  customerName: String,
  rating: Number,
  review: String,
  receiptNo: Number,
  image: {
    type: Array,
    of: String,
  },
})

const reviewsModel = mongoose.model('reviews', reviewsSchema)

export default reviewsModel