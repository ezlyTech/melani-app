import express from 'express'
import usersModel from '../models/users.js'

const userRoute = express.Router()

userRoute.get('/:email', async (req, res) => {
  const user = await usersModel.find({ email: req.params.email })

  if (user.length > 0) {
    res.send(user)
  } else {
    res.status(400).send({ message: "User not found" })
  }

})

userRoute.post('/', async (req, res) => {
  const user = new usersModel({
    name: req.body.name,
    email: req.body.email,
    cart: [],
    favorites: [],
  })

  await user.save()
  console.log("Successfully created user")
  res.send("Successfully created user")
})

export default userRoute