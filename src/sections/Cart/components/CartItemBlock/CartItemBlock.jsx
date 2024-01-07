import {
  Stack,
  Typography,
  Grid,
  Button,
  CardMedia,
  Box,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
} from "@mui/material"
import Iconify from "src/components/iconify";
import { PropTypes } from "prop-types";
import { useState } from "react";

const CartItemBlock = ({ sampleCartItems, quantities, setQuantities, clearAddons, selectedAddons, selectedVariation }) => {
    
  const [selectedSize, setSelectedSizes] = useState({});

  const handleSize = (event, productId) => {
    const newSize = event.target.value;

    setSelectedSizes((prevSelectedSizes) => ({
      ...prevSelectedSizes,
      [productId]: newSize,
    }));
  };
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
                  maxWidth: 85,
                  height: 90,
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
                <Typography
                  gutterBottom
                  variant="body2"
                  mb={0}
                  sx={{
                    fontWeight: 400
                  }}>
                  {product.name}
                </Typography>

                <FormControl 
                  size="small"
                  sx={{ 
                    width: "fit-content",
                    minWidth: 80, 
                    zIndex: 0, 
                    "& .MuiSelect-select": {
                      fontSize: 12,
                      p: "0.5rem"
                    },
                    "& .MuiInputBase-root": {
                      height: 25
                    }
                  }}
                >
                  <InputLabel 
                    id="demo-select-small-label"
                    sx={{ fontSize: 12}}>
                    Size
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={selectedSize[product.id] || "default"}
                    label="Size"
                    onChange={(event) => handleSize(event, product.id)}
                  >
                    <MenuItem value="default">
                      <em>16oz</em>
                    </MenuItem>
                    <MenuItem value="24oz">24oz</MenuItem>
                  </Select>
                </FormControl>

                {/* {selectedAddons && ( */}
                <Chip 
                  label="Expresso Shot" 
                  variant="outlined" 
                  onDelete={() => clearAddons()} 
                  sx={{
                    width: "fit-content", 
                    height:20,
                    fontSize: 12,
                    "& .MuiChip-deleteIcon": {
                      fontSize: 15,
                    }
                  }} 
                />
                {/* )} */}
                
                {/* {selectedVariation && ( */}
                <Chip 
                  label="Milk" 
                  variant="outlined" 
                  onDelete={{clearAddons}} 
                  sx={{
                    width: "fit-content",
                    height:20,
                    fontSize: 12,
                    "& .MuiChip-deleteIcon": {
                      fontSize: 15,
                    }
                  }} 
                />
                {/* )}  */}
                <Typography 
                  variant="caption" 
                  color="primary.main"
                  sx={{pt: 0.5, fontSize: 15}}
                >
                  ₱ {product.price}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={3} 
              sx={{
                display:"flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
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
                    color: "#333333",
                  }}
                >
                  <Iconify icon="eva:plus-outline" width="14px" sx={{"&.MuiButton": {pl:"500px"}}} />
                </Button>
              </Box>
              <Button sx={{p:0, justifyContent: "right"}}>
                <Iconify icon="ic:outline-delete" color="#760101" />
              </Button>
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
  clearAddons: PropTypes.func.isRequired,
  selectedAddons: PropTypes.object.isRequired,
  selectedVariation: PropTypes.object.isRequired,
};

export default CartItemBlock