import express from 'express'
import usersModel from '../models/users.js'

const userRoute = express.Router()

// VERIFY IF USER EXISTS
userRoute.get('/:email', async (req, res) => {
  const user = await usersModel.find({ email: req.params.email })

  if (user.length > 0) {
    res.send(user)
  } else {
    res.status(400).send({ message: "User not found" })
  }

})

// CREATE NEW USER
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

// ADD ITEM TO FAVORITES
userRoute.post('/favorites', async (req, res) => {
  const user = await usersModel.find({ email: req.body.email })

  let favorites = []

  if (!req.body.isFavorite) {
    user[0].favorites.push(req.body.id)
  } else {
    favorites = user[0].favorites.filter((id) => id !== req.body.id)
    user[0].favorites = favorites
  }
  await user[0].save()
  console.log("Successsfully made changes to favorites")
  res.send({ message: "Successsfully added item to favorites" })
})

// MAKE CHANGES TO CART
userRoute.post(('/cart', async (req, res) => {
  const user = await usersModel.find({ email: req.body.email })

  user[0].cart = req.body.cart
  user[0].save()

  console.log("Successsfully made changes to cart")
  res.send({ message: "Successfully modified cart" })
}))

export default userRoute