import {
  Card,
  CardMedia,
  Container,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  const name = "John";
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemData = await axios.get("http://localhost:3031/api/categories")
        setCategories(itemData.data)
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }

    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(categories)
  }, [categories])

  return (
    !isLoading &&
    <>
      <Container sx={{ bgcolor: "#FFEEE1" }}>
        <Typography
          mt={1} mb={1}
          variant="h4"
          color="#3D2209"
        >
          Welcome, {name}!
        </Typography>
      </Container>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/assets/images/banner.png"
        />
      </Card>
      <HomeCategoriesBlock categories={categories} />
      <Container>
        {categories.map((category, index) =>
          <HomeMenuBlock
            category={category}
            key={index} />
        )}
      </Container>
    </>
  );
}
