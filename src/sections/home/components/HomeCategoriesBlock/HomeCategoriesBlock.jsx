import {
  Grid,
  Box
} from "@mui/material";
import CategoryCard from "src/components/CategoryCard";
import TitleTypography from "src/components/TitleTypography";

const HomeCategoriesBlock = () => {
  const sampleProducts = [
    {
      name: "Drinks",
      image: "/assets/images/products/1.png",
    },
    {
      name: "Cakes",
      image: "/assets/images/products/2.png",
    },
    {
      name: "Ala Cartes",
      image: "/assets/images/products/3.png",
    },
    {
      name: "Pastas",
      image: "/assets/images/products/4.png",
    },
    {
      name: "Starters",
      image: "/assets/images/products/5.png",
    },
    {
      name: "Burger & Sandwich",
      image: "/assets/images/products/6.png",
    },
  ]

  return (
    <Box sx={{bgcolor: "#FFFAF6"}}>
      <TitleTypography value="Categories" />

      <Grid container spacing={1} 
        sx={{
          display:"flex",
          justifyContent:"space-between",
          pb:2
        }}>
        {sampleProducts.map((product) => (
          <Grid item xs key={product.key}>
            <CategoryCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HomeCategoriesBlock;