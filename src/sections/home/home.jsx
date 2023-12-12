import { useContext, useEffect, useState } from "react";
import {
  Card,
  CardMedia,
  Container,
  Typography
} from "@mui/material";
import axios from "axios";
import UserContext from "../../UserContext";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  const { name } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemData = await axios.get("http://localhost:3031/api/categories");
        setCategories(itemData.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
