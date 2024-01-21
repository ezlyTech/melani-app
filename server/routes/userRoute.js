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

export default userRoute