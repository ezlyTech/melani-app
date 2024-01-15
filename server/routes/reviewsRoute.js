import express from 'express'
import axios from 'axios'

const reviewsRoute = express.Router()

reviewsRoute.get('/', (req, res) => {
  res.send('test')
})

export default reviewsRoute