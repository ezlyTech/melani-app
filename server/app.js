import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { initDatabase } from "./database"

const app = express()
dotenv.config()
initDatabase()

const port = 3031

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3030",
  credentials: true,
}))

app.listen(port, console.log(`app is running \nListening on port ${port}`))

app.get("/", (req, res) => {
  res.send("test")
})
