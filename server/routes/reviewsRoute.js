import express from 'express'
import axios from 'axios'

const reviewsRoute = express.Router()

reviewsRoute.get('/:receiptNo', async (req, res) => {
  try {
    const receipt = await axios.get(`https://api.loyverse.com/v1.0/receipts/${req.params.receiptNo}`, {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    });

    const itemIDs = receipt.data.line_items.map(item => item.item_id)

    const itemRequests = itemIDs.map(async (id) => {
      const item = await axios.get(`https://api.loyverse.com/v1.0/items/${id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
        }
      })
      return {
        id: item.data.id,
        name: item.data.item_name,
        image: item.data.image_url
      }
    })

    const itemList = await Promise.all(itemRequests)

    res.send(itemList)

  } catch (err) {
    console.log(err)
    res.send({ message: 'Server responded with an error' })
  }
})

reviewsRoute.post('/', (req, res) => {
  res.send(req.body)
  console.log("successfuly received post request to review")
})


export default reviewsRoute