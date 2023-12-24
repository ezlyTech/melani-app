import { 
  Stack,
  Typography,
  Grid, 
  Button,
  CardMedia,
  Box,
  CardContent,
} from "@mui/material"
import Iconify from "src/components/iconify";
import { PropTypes } from "prop-types";

const CartItemBlock = ({sampleCartItems, quantities, setQuantities}) => {
  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  return (
    <Stack spacing={1} sx={{paddingBottom: 22 }}>
      {sampleCartItems.map((product) => (

        <Grid container spacing={1} key={product.id} >
          <Grid item xs={6} sx={{display: "flex", flexDirection:"row"}}>
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
          
            <Box 
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: 2
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
                onClick={() => handleDecrement(product.id)}
                sx={{
                  minWidth: "auto",
                  mr: 1,
                  color: quantities[product.id] === 0 ? "#B1B1B1" : "#333333"
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
                {quantities[product.id] || 0}
              </Typography>
              <Button
                onClick={() => handleIncrement(product.id)}
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
CartItemBlock.propTypes = {
  sampleCartItems: PropTypes.array.isRequired,
  quantities: PropTypes.object.isRequired,
  setQuantities: PropTypes.func.isRequired,
};

export default CartItemBlock