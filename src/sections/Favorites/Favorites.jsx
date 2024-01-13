import React from "react";
import {
  Container,
  Grid,
  Typography
} from "@mui/material";
import { ProductCard } from "src/components";

const Favorites = () => {
  const sampleProducts = [
    {
      name: "Chocolate Obscura",
      image: "/assets/images/products/1.png",
      price: "154.00",
      rating: 4,
    },
    {
      name: "Biscuit Munch",
      image: "/assets/images/products/2.png",
      price: "154.00",
      rating: 3,
    },
    {
      name: "Alfredo Penne",
      image: "/assets/images/products/3.png",
      price: "154.00",
      rating: 5,
    },
    {
      name: "Cinnamon Rolls",
      image: "/assets/images/products/4.png",
      price: "154.00",
      rating: 5,
    },
  ];

  return (
    <Container>
      <Typography
        variant="h5"
        align="left" gutterBottom
        sx={{ marginBottom: "15px" }}>
        Favorites
      </Typography>
      <Grid container spacing={2}>
        {sampleProducts.map((product, index) => (
          <Grid item xs key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Favorites;
