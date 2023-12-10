import {
  Grid,
} from "@mui/material";
import { ProductCard, TitleTypography } from "src/components"
import PropTypes from "prop-types";

const HomeMenuBlock = ({title}) => {
  const sampleProducts = [
    {
      id: 1,
      name: "Chocolate Obscura",
      image: "/assets/images/products/1.png",
      price: "154.00",
      rating: 4,
    },
    {
      id: 2,
      name: "Biscuit Munch",
      image: "/assets/images/products/2.png",
      price: "154.00",
      rating: 3,
    },
    {
      id: 3,
      name: "Alfredo Penne",
      image: "/assets/images/products/3.png",
      price: "154.00",
      rating: 5,
    },
    {
      id: 4,
      name: "Cinnamon Rolls",
      image: "/assets/images/products/4.png",
      price: "154.00",
      rating: 5,
    },
    {
      id: 5,
      name: "Velvet Eclipse",
      image: "/assets/images/products/5.png",
      price: "154.00",
      rating: 5,
    },
    {
      id: 6,
      name: "Strawberry Cake",
      image: "/assets/images/products/6.png",
      price: "154.00",
      rating: 5,
    },
  ]

  return (
    <>
      <TitleTypography value={title} />
  
      <Grid container spacing={2}>
        {sampleProducts.map((product) => (
          <Grid item xs key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

HomeMenuBlock.propTypes = {
  title: PropTypes.string
};

export default HomeMenuBlock;
