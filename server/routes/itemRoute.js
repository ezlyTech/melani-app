import express from 'express'
import axios from 'axios'
import { JSDOM } from 'jsdom'

const itemRoute = express.Router()

itemRoute.get('/list/:categoryID', async (req, res) => {
  try {
    const itemData = await axios.get("https://api.loyverse.com/v1.0/items", {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    })

    let items = []

    for (let i in itemData.data.items) {
      if (itemData.data.items[i].category_id === req.params.categoryID) {
        items.push({
          name: itemData.data.items[i].item_name,
          image: itemData.data.items[i].image_url,
          price: itemData.data.items[i].variants[0].stores[0].price,
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

itemRoute.get('/single/:productID', async (req, res) => {
  try {
    const itemData = await axios.get(`https://api.loyverse.com/v1.0/items/${req.params.productID}`, {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    })

    // Create a DOM from the HTML content
    const dom = new JSDOM(itemData.data.description);
    const paragraphs = dom.window.document.querySelectorAll("p");

    // Remove <p> tags
    paragraphs.forEach((p) => {
      const parent = p.parentNode;
      while (p.firstChild) {
        parent.insertBefore(p.firstChild, p);
      }
      parent.removeChild(p);
    });
    console.log("successfully fetched an item")

    let variants = {
      free: [],
      addon: []
    }

    let prices = []
    let minimumPrice

    for (let i in itemData.data.variants) {
      prices.push(itemData.data.variants[i].stores[0].price)
    }
    prices.sort()
    minimumPrice = prices[0]


    if (itemData.data.option1_name && itemData.data.option2_name && itemData.data.option3_name) {

    } else if (itemData.data.option1_name && itemData.data.option2_name) {

    } else if (itemData.data.option1_name) {
      let isFree = true

      for (let i in itemData.data.variants) {
        if (itemData.data.variants[i].stores[0].price > minimumPrice) {
          isFree = false
          variants.addon.push({
            name: itemData.data.option1_name,
            variations: []
          })
          break
        }
      }
      if (isFree) {
        variants.free.push({
          name: itemData.data.option1_name,
          variations: []
        })
      }

      for (let i in itemData.data.variants) {
        if (isFree) {
          variants.free[0].variations.push(itemData.data.variants[i].option1_value)
        } else {
          variants.addon[0].variations.push({
            name: itemData.data.variants[i].option1_value,
            cost: itemData.data.variants[i].stores[0].price - minimumPrice
          })
        }
      }
    }

    res.send({
      name: itemData.data.item_name,
      price: minimumPrice,
      image: itemData.data.image_url,
      rating: 4,
      information: dom.window.document.body.innerHTML,
      option: {
        free: variants.free,
        addons: variants.addon,
      },

      uploads: [
        {
          url: "/assets/images/products/1.png",
        },
        {
          url: "/assets/images/products/2.png",
        },
        {
          url: "/assets/images/products/3.png",
        },
        {
          url: "/assets/images/products/4.png",
        },
        {
          url: "/assets/images/products/5.png",
        },
        {
          url: "/assets/images/products/6.png",
        },
      ],
    })
  } catch (err) {
    console.log(err)
  }
})

export default itemRoute