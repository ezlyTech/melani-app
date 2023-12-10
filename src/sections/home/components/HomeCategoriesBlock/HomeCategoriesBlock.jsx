import {
  Grid,
  Box
} from "@mui/material";
import {
  CategoryCard,
  TitleTypography,
} from "src/components";

const HomeCategoriesBlock = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Drinks",
      image: "/assets/images/products/1.png",
    },
    {
      id: 2,
      name: "Cakes",
      image: "/assets/images/products/2.png",
    },
    {
      id: 3,
      name: "Ala Cartes",
      image: "/assets/images/products/3.png",
    },
    {
      id: 4,
      name: "Pastas",
      image: "/assets/images/products/4.png",
    },
    {
      id: 5,
      name: "Starters",
      image: "/assets/images/products/5.png",
    },
    {
      id: 6,
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
          <Grid item xs key={product.id}>
            <CategoryCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HomeCategoriesBlock;