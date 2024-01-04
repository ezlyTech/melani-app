import {
  Stack,
  Typography,
  Grid,
  Button,
  CardMedia,
  Box,
  CardContent,
  Container,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material"
import Iconify from "src/components/iconify";
import { PropTypes } from "prop-types";

const CartItemBlock = ({ sampleCartItems, quantities, setQuantities, selectedSize, setSelectedSize, clearAddons }) => {
    
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

  console.log(selectedSize)
  return (
    <Container>
      <Typography 
        sx={{
          color: "#3D2209",
          fontWeight: 600, 
        }}>
        Cart
      </Typography>
      <Stack spacing={1} sx={{ paddingBottom: 22 }}>
        {sampleCartItems.map((product) => (
          <Grid container spacing={1} pb={1} key={product.id} width="100%">
            <Grid item xs={9} sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{
                  width: "100%",
                  maxWidth: 70,
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
                  ml: 2,
                  gap: .5
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
                      fontWeight: 400
                    }}>
                    {product.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    ₱ {product.price}
                  </Typography>
                </CardContent>
                <FormControl 
                  sx={{ 
                    width:  "fit-content",
                    minWidth: 80, 
                    zIndex:0, 
                    height: "fit-content",
                    "& .MuiOutlinedInput-input": {
                      fontSize: 12,
                    },
                    "&. MuiFormControl": {
                      height: "5px",
                      width: 100
                    }
                  }} 
                  size="small">
                  <InputLabel id="demo-select-small-label">
                    Size
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedSize}
                    label="Size"
                    onChange={(event) => setSelectedSize(event.target.value)}
                  >
                    <MenuItem value="default">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="16oz">16oz</MenuItem>
                    <MenuItem value="24oz">24oz</MenuItem>
                  </Select>
                </FormControl>
                <Chip 
                  label="Expresso Shot" 
                  variant="outlined" 
                  onDelete={
                    <IconButton size="small">{clearAddons}
                    </IconButton>} 
                  sx={{width: "fit-content", height:30}} 
                />
                <Chip 
                  label="Milk" 
                  variant="outlined" 
                  onDelete={
                    <IconButton size="small">{clearAddons}
                    </IconButton>} 
                  sx={{width: "fit-content", height:30}} 
                />
              </Box>
            </Grid>

            <Grid item xs={3}>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                  }}>
                  <Button
                    onClick={() => handleDecrement(product.id)}
                    sx={{
                      minWidth: "auto",
                      mr: 0.5,
                      color: quantities[product.id] === 0 ? "#B1B1B1" : "#333333"
                    }}
                  >
                    <Iconify icon="eva:minus-outline" width="14px" />
                  </Button>
                  <Typography
                    sx={{
                      background: "#FFF2ED",
                      color: "#DDA15E",
                      p: ".5em 1em .5em 1em",
                      borderRadius: "4px",
                      fontWeight: 600,
                      minWidth: "30px",
                      textAlign: "center",
                      fontSize: ".70rem"
                    }}>
                    {quantities[product.id] || 0}
                  </Typography>
                  <Button
                    onClick={() => handleIncrement(product.id)}
                    sx={{
                      minWidth: "auto",
                      ml: 0.5,
                      color: "#333333"
                    }}
                  >
                    <Iconify icon="eva:plus-outline" width="14px" sx={{"&.MuiButton": {pl:"500px"}}} />
                  </Button>
                </Box>
                <IconButton>
                  <Iconify icon="ic:outline-delete" color="#760101" />
                </IconButton>
              </Container>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Container>
  )
}
CartItemBlock.propTypes = {
  sampleCartItems: PropTypes.array.isRequired,
  quantities: PropTypes.object.isRequired,
  setQuantities: PropTypes.func.isRequired,
  selectedSize: PropTypes.string.isRequired,
  setSelectedSize: PropTypes.func.isRequired,
  clearAddons: PropTypes.func.isRequired,
};

export default CartItemBlock