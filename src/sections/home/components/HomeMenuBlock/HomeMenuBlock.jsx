import {
  Grid,
} from "@mui/material";
import { ProductCard, TitleTypography } from "src/components"

const HomeMenuBlock = () => {
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
    {
      name: "Velvet Eclipse",
      image: "/assets/images/products/5.png",
      price: "154.00",
      rating: 5,
    },
    {
      name: "Strawberry Cake",
      image: "/assets/images/products/6.png",
      price: "154.00",
      rating: 5,
    },
  ]

  return (
    <>
      <TitleTypography value="Signature Dishes" />

      <Grid container spacing={2}>
        {sampleProducts.map((product) => (
          <Grid item xs key={product.key}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default HomeMenuBlock;
