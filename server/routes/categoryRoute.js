import express from "express";
import axios from "axios";

const categoryRoute = express.Router()

const token = "c444dac47f47470bb0ee9ddf4213fa75"

categoryRoute.get('/', async (req, res) => {
  let categories = []
  try {
    const itemData = await axios.get("https://api.loyverse.com/v1.0/categories", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    for (let i in itemData.data.categories) {
      categories.push({
        name: itemData.data.categories[i].name,
        image: "/assets/images/products/1.png"
      })
    }

    console.log("successfully fetched categories")
    res.send(categories)
  } catch (err) {
    console.log(err)
  }

})

export default categoryRoute