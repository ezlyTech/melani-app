import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material"
import { PropTypes } from "prop-types"
import { useState } from "react";

const CartPreviewBlock = ({
  cartData,
  handlePlaceOrder,
  setTableNumber,
  totalPrice,
}) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [isTableNumberFocused, setIsTableNumberFocused] = useState(false);

  const handleTableNumberChange = (e) => {
    const tableNumber = e.target.value;
    setTableNumber(tableNumber);
    setIsButtonDisabled(tableNumber === "");
  };

  return (

    <Container
      sx={{
        width: "100%",
        borderRadius: 1,
        position: "fixed",
        bottom: 0,
        backgroundColor: "#FFF",
        boxShadow: "0px -5px 5px 0px rgba(0, 0, 0, 0.04)"
      }}
    >
      <Box pt={1}>
        <Typography variant="caption">
          {cartData.length} items
        </Typography>
        <TextField
          required
          label="Table Number"
          type="number"
          variant="outlined"
          sx={{
            width: "100%",
            mt: 1,
            mb: 1,
            "&:focus": {
              outline: "2px solid #888C03",
            },
          }}
          onChange={handleTableNumberChange}
          onFocus={() => setIsTableNumberFocused(true)}
          onBlur={() => setIsTableNumberFocused(false)}
        />
      </Box>
      <Grid
        container
        spacing={2}
        pb={2}
      >
        <Grid item xs={4}>
          <Box>
            <Typography variant="caption">Total</Typography>
            <Typography variant="h5">₱{totalPrice}</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Button
            sx={{
              mt: 1,
              borderRadius: 31,
              border: !isButtonDisabled && "#1px solid #888C03",
              background: isButtonDisabled ? "#dfdfdf" : "#888C03",
              color: "#FFF",
              width: "100%"
            }}
            onClick={handlePlaceOrder}
            disabled={isButtonDisabled}
          >
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

CartPreviewBlock.propTypes = {
  cartData: PropTypes.array.isRequired,
  handlePlaceOrder: PropTypes.func.isRequired,
  setTableNumber: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default CartPreviewBlock