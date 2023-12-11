import express from 'express'

const itemRoute = express.Router()

itemRoute.get('/', (req, res) => {
  res.send({ message: "it works" })
})

export default itemRoute