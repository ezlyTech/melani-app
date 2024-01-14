import express from "express"
import axios from "axios"

const orderRoute = express.Router()

orderRoute.get("/", (req, res) => {
  res.send("test")
})

export default orderRoute

