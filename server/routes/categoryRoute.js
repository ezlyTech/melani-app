import express from "express";
import axios from "axios";

const categoryRoute = express.Router()

categoryRoute.get('/', async (req, res) => {

  try {
    const categoryData = await axios.get("https://api.loyverse.com/v1.0/categories", {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    })

    const itemsData = await axios.get("https://api.loyverse.com/v1.0/items", {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
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
    if (axios.isAxiosError(err)) {
      console.error("Axios Error:", err.message);
    } else {
      console.error("Generic Error:", err.message);
    }
    res.status(500).send("Internal Server Error");
  }


})

export default categoryRoute