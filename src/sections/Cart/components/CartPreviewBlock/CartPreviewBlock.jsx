import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material"
import { PropTypes } from "prop-types"
// import { useState } from "react";

const CartPreviewBlock = ({ sampleCartItems, quantities }) => {
  // const [voucherDiscount, setVoucherDiscount] = useState(0);

  const subtotal = sampleCartItems.reduce(
    (total, item) =>
      total + (parseFloat(item.price) || 0) * (item.quantity || 0),
    0
  );

  const total = subtotal * (1);

  // const handleVoucherSelect = (event, value) => {
  //   if (value) {
  //     setVoucherDiscount(value.discount);
  //   } else {
  //     setVoucherDiscount(0);
  //   }
  // };

  // const voucher = [
  //   {
  //     id: 1,
  //     label: "Student",
  //     discount: 0.125
  //   },
  //   {
  //     id: 2,
  //     label: "Person w/ Disabilities",
  //     discount: 0.1
  //   },
  //   {
  //     id: 3,
  //     label: "Senior",
  //     discount: 0.1
  //   }
  // ]

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
          {sampleCartItems.length} items
        </Typography>
        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={voucher}
          getOptionLabel={(option) => option.label}
          onChange={handleVoucherSelect}
          sx={{ mt: 1, mb: 2 }}
          renderInput={(params) => <TextField {...params} label="Voucher" />}
        /> */}
        <TextField label="Table Number" type="number" variant="outlined" sx={{ width: "100%", mt: 1, mb: 1 }} />
      </Box>
      <Grid container spacing={2} mb={2}>
        <Grid item xs={8}>
          <Typography variant="subtitle2" color="#000">Subtotal:</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle2" textAlign="right" color="#000">₱{subtotal.toFixed(2)}</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        pb={2}
      >
        <Grid item xs={4}>
          <Box>
            <Typography variant="caption">Total</Typography>
            <Typography variant="h5">₱{total.toFixed(2)}</Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Button
            sx={{
              mt: 1,
              borderRadius: 31,
              border: "1px solid #888C03",
              background: "#888C03",
              color: "#FFF",
              width: "100%"
            }}>
            <Typography variant="subtitle1" >Place Order</Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>

  )
}

CartPreviewBlock.propTypes = {
  sampleCartItems: PropTypes.array.isRequired,
  quantities: PropTypes.object.isRequired,
};

export default CartPreviewBlock