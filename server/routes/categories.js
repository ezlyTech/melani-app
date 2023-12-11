import express from "express";
import axios from "axios";

const categories = express.Router()

const token = "c444dac47f47470bb0ee9ddf4213fa75"

categories.get('/', async (req, res) => {
  try {
    const itemData = await axios.get("https://api.loyverse.com/v1.0/categories", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log("successfully fetched categories")
    res.send(itemData.data.categories)
  } catch (err) {
    console.log(err)
  }

})

export default categories