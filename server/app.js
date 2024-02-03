//PACKAGES
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
// eslint-disable-next-line import/extensions
import { initDatabase } from "./database.js";

//ROUTES
import categoryRoute from "./routes/categoryRoute.js";
import itemRoute from "./routes/itemRoute.js";
import orderRoute from "./routes/orderRoute.js";
import reviewsRoute from "./routes/reviewsRoute.js";
import userRoute from "./routes/userRoute.js";

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

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

//ROUTES
app.use('/api/categories', categoryRoute)
app.use('/api/items', itemRoute)
app.use('/api/order', orderRoute)
app.use('/api/reviews', reviewsRoute)
app.use('/api/users', userRoute)
