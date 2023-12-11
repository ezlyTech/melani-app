import express from 'express'
import axios from 'axios'

const itemRoute = express.Router()
const token = "c444dac47f47470bb0ee9ddf4213fa75"

itemRoute.get('/:categoryID', async (req, res) => {
  try {
    const itemData = await axios.get("https://api.loyverse.com/v1.0/items", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    let items = []

    for (let i in itemData.data.items) {
      if (itemData.data.items[i].category_id === req.params.categoryID) {
        items.push({
          name: itemData.data.items[i].item_name,
          image: itemData.data.items[i].image_url,
          price: itemData.data.items[i].variants[0].default_price,
          rating: 4,
          product_id: itemData.data.items[i].id
        })
      }
    }

    console.log("successfully fetched items")
    res.send(items)
  } catch (err) {
    console.log(err)
  }
})

export default itemRoute