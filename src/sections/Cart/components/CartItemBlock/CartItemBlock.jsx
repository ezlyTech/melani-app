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
import EmptyState from "src/components/EmptyState";

const CartItemBlock = ({
  cartItems,
  // quantities,
  // setQuantities,
  clearAddons,
  // selectedOptions,
  cartData,
  optionChange,
  deleteItem,
  handleIncrement,
  handleDecrement
}) => (
  cartData.length === 0 ? (
    <Container>
      <Typography
        sx={{
          color: "#3D2209",
          fontWeight: 600,
        }}>
        Cart
      </Typography>
      <EmptyState value="items" />
    </Container>
  ) : (
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
          <div key={i}>
            <Grid container spacing={1} pb={1} width="100%">
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
                      <div key={j}>
                        <InputLabel
                          id="demo-select-small-label"
                          sx={{ fontSize: 12 }}>
                          {option.name}
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={cartData[i]?.selectedVariation[j]}
                          label="Size"
                          onChange={(event) => optionChange(event, i, j)}
                        >
                          {option.variations.map((variation, k) =>
                            <MenuItem value={variation} key={k}>
                              {variation}
                            </MenuItem>
                          )}
                        </Select>
                      </div>

                    )
                    }

                  </FormControl>

                  {/* {selectedAddons && ( */}

                  {cartData[i]?.selectedAddons.map((addon, j) =>
                    <Chip
                      key={j}
                      label={addon.name}
                      variant="outlined"
                      onDelete={() => clearAddons(addon.id, i, j)}
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
                    ₱ {cartData[i].totalPrice}
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
                    onClick={() => handleDecrement(i)}
                    sx={{
                      minWidth: "auto",
                      mr: 0.5,
                      // color: quantities[product.id] === 0 ? "#B1B1B1" : "#333333"
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
                    {cartData[i].quantity}
                  </Typography>
                  <Button
                    onClick={() => handleIncrement(i)}
                    sx={{
                      minWidth: "auto",
                      ml: 0.5,
                      color: "#333333",
                    }}
                  >
                    <Iconify icon="eva:plus-outline" width="14px" sx={{ "&.MuiButton": { pl: "500px" } }} />
                  </Button>
                </Box>
                <IconButton sx={{ width: "fit-content" }} onClick={() => deleteItem(i)}>
                  <Iconify icon="ic:outline-delete" color="#760101" />
                </IconButton>
              </Grid>
            </Grid>
            <Divider />
          </div>
        ))}
      </Stack>
      
    </Container>
  )
  
)
CartItemBlock.propTypes = {
  cartItems: PropTypes.array.isRequired,
  // quantities: PropTypes.object.isRequired,
  // setQuantities: PropTypes.func.isRequired,
  clearAddons: PropTypes.func.isRequired,
  // selectedAddons: PropTypes.object.isRequired,
  // selectedOptions: PropTypes.array.isRequired,
  cartData: PropTypes.array.isRequired,
  optionChange: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default CartItemBlock