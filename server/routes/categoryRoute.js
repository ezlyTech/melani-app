import express from "express";
import axios from "axios";

const categoryRoute = express.Router()

const token = "c444dac47f47470bb0ee9ddf4213fa75"

categoryRoute.get('/', async (req, res) => {

  try {
    const categoryData = await axios.get("https://api.loyverse.com/v1.0/categories", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const itemsData = await axios.get("https://api.loyverse.com/v1.0/items", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })


    let categories = []
    for (let i in categoryData.data.categories) {
      let image = ""

      for (let j in itemsData.data.items) {
        if (itemsData.data.items[j].category_id === categoryData.data.categories[i].id) {
          image = itemsData.data.items[j].image_url
          break
        }
      }

      categories.push({
        name: categoryData.data.categories[i].name,
        image: image,
        category_id: categoryData.data.categories[i].id
      })

    }

    console.log("successfully fetched categories")
    res.send(categories)
  } catch (err) {
    console.log(err)
  }

})

export default categoryRoute