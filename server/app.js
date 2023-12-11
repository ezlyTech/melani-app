//PACKAGES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
// eslint-disable-next-line import/extensions
import { initDatabase } from "./database.js";

//ROUTES
import categories from "./routes/categories.js";

const app = express();
dotenv.config();
initDatabase();

const port = 3031;

//MIDDLEWARE
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

//ROUTES
app.use('/api/categories', categories)
