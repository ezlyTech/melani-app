import express from "express"
import axios from "axios"

const orderRoute = express.Router()

orderRoute.post("/", async (req, res) => {
  try {
    const store = await axios.get('https://api.loyverse.com/v1.0/stores/', {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    })
    const paymentType = await axios.get('https://api.loyverse.com/v1.0/payment_types/', {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    })
    const storeID = store.data.stores[0].id
    const paymentID = paymentType.data.payment_types.find((payment) => payment.type === 'CASH').id

    const requestBody = {
      store_id: storeID,
      line_items: req.body,
      payments: [{ payment_type_id: paymentID }]
    }

    const receipt = await axios.post('https://api.loyverse.com/v1.0/receipts', requestBody, {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    });

    res.send(receipt.data)

  } catch (err) {
    console.log(err)
  }
})

orderRoute.get('/receipt/:receiptNo', async (req, res) => {
  try {
    const receipt = await axios.get(`https://api.loyverse.com/v1.0/receipts/${req.params.receiptNo}`, {
      headers: {
        'Authorization': `Bearer ${process.env.VITE_LOYVERSE_TOKEN}`
      }
    })
    if (receipt.data) {
      res.send(receipt.data)
    } else {
      res.send({ message: "Get receipt request unsuccessful" })
    }
  } catch (err) {
    console.log(err)
    res.send({ message: "Server responded with an error" })
  }
})

export default orderRoute

