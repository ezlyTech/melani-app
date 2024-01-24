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
  res.send({ message: "Successsfully added item to favorites" })
})

userRoute.post('/cart/add', async (req, res) => {
  const user = await usersModel.find({ email: req.body.email })
  const cart = user[0].cart

  // LOGIC TO FIND DUPLICATE ITEMS
  const duplicateIndex = cart.findIndex((item) => {
    const isIdMatch = item.id === req.body.lineItems[0].id;
    const isVariationMatch = JSON.stringify(item.selectedVariation) === JSON.stringify(req.body.lineItems[0].selectedVariation);
    const isAddonsMatch = JSON.stringify(item.selectedAddons) === JSON.stringify(req.body.lineItems[0].selectedAddons);

    return isIdMatch && isVariationMatch && isAddonsMatch;
  })

  if (duplicateIndex > -1) {
    console.log("Duplicate item detected")

    const modifiedCart = [...cart]
    modifiedCart[duplicateIndex].quantity += req.body.lineItems[0].quantity
    user[0].cart[duplicateIndex] = modifiedCart[duplicateIndex]
  } else {
    cart.push(req.body.lineItems[0])
    user[0].cart = cart;
  }

  await user[0].save()

  console.log("Successfully updated cart")
  res.send({ message: "Successfully updated cart" })
})


// REMOVE AN ITEM FROM THE CART
userRoute.post('/cart/remove', async (req, res) => {
  const user = await usersModel.find({ email: req.body.email })
  const modifiedCart = user[0].cart.filter((item) => item.id !== req.body.productID)
  user[0].cart = modifiedCart

  await user[0].save()

  console.log("Successfully updated cart")
  res.send({ message: "Successfully updated cart" })
})

export default userRoute