import express from 'express'

const userRoute = express.Router()

userRoute.get('', (req, res) => {
  res.send('test')
})

export default userRoute