import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
// eslint-disable-next-line import/extensions
import { initDatabase } from "./database.js";
import categories from "./routes/categories.js";

const app = express();
dotenv.config();
initDatabase();

const port = 3031;
const token = "c444dac47f47470bb0ee9ddf4213fa75"

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3030",
    credentials: true,
  })
);

app.listen(port, console.log(`app is running \nListening on port ${port}`));

app.get("/", (req, res) => {
  res.send("test");
});

app.get('/fetch-data', async (req, res) => {
  try {
    const itemData = await axios.get("https://api.loyverse.com/v1.0/categories", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    console.log(itemData.data)

  } catch (err) {
    console.log(err)
  }

  res.send('ok')
})

app.use('/test', categories)
