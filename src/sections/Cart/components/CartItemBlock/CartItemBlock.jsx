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
  IconButton,
  Divider,
} from "@mui/material"
import Iconify from "src/components/iconify";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const CartItemBlock = ({ cartItems, quantities, setQuantities, clearAddons, selectedVariation }) => {
  const [cartData, setCartData] = useState()
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedAddons, setSelectedAddons] = useState([])
  // const [selectedSize, setSelectedSizes] = useState({});

  const optionChange = (event, i, j) => {
    // const newSize = event.target.value;

    // setSelectedSizes((prevSelectedSizes) => ({
    //   ...prevSelectedSizes,
    //   [productId]: newSize,
    // }));

    const modifiedSelectedOptions = [...selectedOptions]
    modifiedSelectedOptions[i][j] = event.target.value
    setSelectedOptions(modifiedSelectedOptions)
  };

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  useEffect(() => {
    const cartItemData = JSON.parse(sessionStorage.getItem("lineItems"))

    setCartData(cartItemData)
    setSelectedOptions([cartItemData.map((item, i) => item.selectedVariation)])
    setSelectedAddons([cartItemData.map((item, i) => item.selectedAddons)])
  }, [])

  useEffect(() => {
    console.log("cart Items: ", cartData)
    console.log("selected Options: ", selectedOptions)
    console.log("selected Addons: ", selectedAddons)
  }, [cartItems, cartData, selectedOptions, selectedAddons])

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
        {cartItems.map((product, i) => (
          <>
            <Grid container spacing={1} pb={1} key={i} width="100%">
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
                      fontWeight: 600
                    }}>
                    {product.name}
                  </Typography>

                  <FormControl
                    size="small"
                    sx={{
                      mt: 1,
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
                    {/* Item Variations */}
                    {product.option.map((option, j) =>
                      <>
                        <InputLabel
                          key={j}
                          id="demo-select-small-label"
                          sx={{ fontSize: 12 }}>
                          {option.name}
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={selectedOptions[i][j]}
                          label="Size"
                          onChange={(event) => optionChange(event, i, j)}
                        >
                          {option.variations.map((variation, k) =>
                            <MenuItem value={variation} key={k}>
                              {variation}
                            </MenuItem>
                          )}
                        </Select>
                      </>

                    )
                    }

                  </FormControl>

                  {/* {selectedAddons && ( */}

                  {cartData[i].selectedAddons.map((addon, j) =>
                    <Chip
                      label={addon.name}
                      variant="outlined"
                      onDelete={() => clearAddons()}
                      sx={{
                        width: "fit-content",
                        height: 20,
                        fontSize: 12,
                        "& .MuiChip-deleteIcon": {
                          fontSize: 15,
                        }
                      }}
                    />
                  )}

                  <Typography
                    variant="caption"
                    color="primary.main"
                    sx={{ pt: 0.5, fontSize: 15, fontWeight: 600 }}
                  >
                    ₱ {product.price}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "end"
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
                    {quantities[product.id] || 1}
                  </Typography>
                  <Button
                    onClick={() => handleIncrement(product.id)}
                    sx={{
                      minWidth: "auto",
                      ml: 0.5,
                      color: "#333333",
                    }}
                  >
                    <Iconify icon="eva:plus-outline" width="14px" sx={{ "&.MuiButton": { pl: "500px" } }} />
                  </Button>
                </Box>
                <IconButton sx={{ width: "fit-content" }}>
                  <Iconify icon="ic:outline-delete" color="#760101" />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
          </>
        ))}
      </Stack>
    </Container>
  )
}
CartItemBlock.propTypes = {
  cartItems: PropTypes.array.isRequired,
  quantities: PropTypes.object.isRequired,
  setQuantities: PropTypes.func.isRequired,
  clearAddons: PropTypes.func.isRequired,
  // selectedAddons: PropTypes.object.isRequired,
  selectedVariation: PropTypes.object.isRequired,
};

export default CartItemBlock