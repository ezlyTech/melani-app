import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewsSchema = new Schema({
  itemID: String,
  itemName: String,
  customerName: String,
  rating: Number,
  review: String,
  image: String,
})

const reviewsModel = mongoose.model('reviews', reviewsSchema)

export default orderModel