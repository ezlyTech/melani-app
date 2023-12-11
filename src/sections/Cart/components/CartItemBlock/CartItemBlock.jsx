import { Stack,
  Typography,
  Grid, 
  Button,
  CardMedia,
  Box,
  CardContent,
} from "@mui/material"
import { useState } from "react";
import Iconify from "src/components/iconify";

const CartItemBlock = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const sampleCartItems = [
    {
      id: 1,
      name: "Chocolate Obscura",
      image: "/assets/images/products/1.png",
      price: "154.00",
    },
    {
      id: 2,
      name: "Biscuit Munch",
      image: "/assets/images/products/2.png",
      price: "154.00",
    },
    {
      id: 3,
      name: "Alfredo Penne",
      image: "/assets/images/products/3.png",
      price: "154.00",
    },
    {
      id: 4,
      name: "Cinnamon Rolls",
      image: "/assets/images/products/4.png",
      price: "154.00",
    },
  ]

  return (
    <Stack spacing={1}>
      {sampleCartItems.map((product) => (

        <Grid container spacing={1} key={product.id} >
          <Grid item xs={3} >
            <CardMedia
              component="img"
              sx={{ 
                width: "100%",
                maxWidth:70, 
                height: 75, 
                borderRadius: 1
              }}
              image={product.image}
              alt=""
            />
          </Grid>
          <Grid item xs={6}>
            <Box 
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
              <CardContent 
                sx={{ 
                  flex: "1 0 auto", 
                  padding: 0 
                }}>
                <Typography 
                  gutterBottom
                  variant="body2" 
                  mb={0} 
                  sx={{
                    fontWeight:400
                  }}>
                  {product.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  ₱ {product.price}
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        
          <Grid item xs={3}>
            <Box 
              sx={{ 
                display: "flex",
                alignItems: "center"
              }}>
              <Button
                onClick={handleDecrement}
                sx={{
                  minWidth: "auto",
                  mr: 1,
                  color: quantity === 0 ? "#B1B1B1" : "#333333"
                }}
              >
                <Iconify icon="eva:minus-outline" />
              </Button>
              <Typography
                sx={{
                  background: "#FFF2ED",
                  color: "#DDA15E",
                  p: ".5em 1em .5em 1em",
                  borderRadius: "4px",
                  fontWeight: 600,
                  minWidth: "30px",
                  textAlign: "center"
                }}>
                {quantity}
              </Typography>
              <Button
                onClick={handleIncrement}
                sx={{
                  minWidth: "auto",
                  ml: 1,
                  color: "#333333"
                }}
              >
                <Iconify icon="eva:plus-outline" />
              </Button>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Stack>
  )
}

export default CartItemBlock