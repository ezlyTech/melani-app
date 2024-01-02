import {
  Container,
  Typography,
  Box,
  Button,
  Grid
} from "@mui/material";
import React from "react";
import { useRouter } from "src/routes/hooks";



const ReceiptBlock = () => {
  const store = "Melani's Bakehouse";
  const address = "30 Bayacal Street, Sabutan, Silang, Cavite, Philippines";
  const orderNum = 69;
  const customerName = "Soobin"
  const tableNum = 3;

  const items = [
    { name: "Double Choco Cake", price: 120.00 },
    { name: "Biscuit Munch", price: 146.00 },
  ];

  const userDiscountRates = {
    "Double Choco Cake": 0.1, // 10%
    "Biscuit Munch": 0.1, // 10%
  };

  const calculateItemTotal = (item) => {
    const discountRate = userDiscountRates[item.name] || 0;
    const itemDiscount = item.price * discountRate;
    const itemTotal = item.price - itemDiscount;
    return { original: item.price, discounted: itemTotal };
  };

  const subtotal = items.reduce((acc, item) => acc + calculateItemTotal(item).original, 0);
  const total = items.reduce((acc, item) => acc + calculateItemTotal(item).discounted, 0);



  const router = useRouter();
  const redirectToReview = () => {

    if (router.push) {
      router.push("/review");
    } else {
      router.push("/404")
    }
  };

  return (
    <Container>
      <Typography
        align="center"
        sx={{
          mb: 1,
          "& h4": { mb: 1 }
        }}
      >
        <h4>{store}</h4>
        {address}
      </Typography>

      <Box
        sx={{
          "& h5": {
            margin: 1
          }
        }}
      >
        <Typography align="center"
          sx={{
            mb: 3,
            "& h1": { mb: 0, mt: 2 }
          }}
        >
          <h1>{orderNum}</h1>
          Order Number
        </Typography>
        <Typography variant="caption" fontWeight={500}>Time & Date: 5:53 03/04/19</Typography> <br />
        <Typography variant="caption" fontWeight={500}>Table Number: {tableNum}</Typography> <br />
        {customerName && (
          <Typography variant="caption" fontWeight={500}>Customer Name: {customerName}</Typography>
        )}
      </Box>


      <Box sx={{
        flexGrow: 2,
        mt: 2,
        pb: 2,
        borderTop: 1,
        widht: "100%",
      }}>
        {items.map((item, index) => (
          <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            key={index}>

            {/* Orig Price */}
            <Grid item xs={8}>
              <strong>
                <p>{item.name}:</p>
              </strong>
            </Grid>
            <Grid item xs={4} >
              <strong>
                <p style={{ textAlign: "end" }}>₱{item.price.toFixed(2)}</p>
              </strong>

            </Grid>

            {/* DISCOUNT */}
            <Grid item xs={8}>
              <p
                style={{
                  marginTop: -5,
                  marginLeft: 10,
                  marginBottom: 2,
                  color: "#979797"
                }}>
                Student Discount ({(userDiscountRates[item.name] * 100).toFixed(2)}%):
              </p>
            </Grid>
            <Grid item xs={4} >
              <p style={{
                textAlign: "end",
                marginTop: -5,
                marginBottom: 2,
                color: "#979797"
              }}>
                -₱{(item.price * userDiscountRates[item.name]).toFixed(2)}
              </p>
            </Grid>
          </Grid>
        ))}
      </Box>


      <Box>
        <Typography
          variant="subtitle2"
          sx={{
            display: "flex",
            flexDirection: "column",
            borderTop: "2px dashed",
            mb: 2,
            "& strong": {
              mt: 1,
              ml: 1,
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
            },
          }}
        >
          <strong>
            <span>Subtotal:</span>
            <span>₱{subtotal.toFixed(2)}</span>
          </strong>

          {items.map((item, index) => (
            <strong key={index}>
              <span>
                {item.name}: ({(-userDiscountRates[item.name] * 100).toFixed(2)}%):
              </span>
              <span>-₱{(item.price * userDiscountRates[item.name]).toFixed(2)}</span>
            </strong>
          ))}
        </Typography>

        <Box
          sx={{
            borderTop: 1,
          }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1.5
            }}
          >
            <strong>Amount Due:</strong> ₱{total.toFixed(2)}
          </Typography>

        </Box>
      </Box>
      <Button
        fullWidth
        size='large'
        variant='outlined'
        sx={{
          borderColor: "#888C03",
          background: "#888C03",
          color: "#FFF",
          borderRadius: "30px",
          mt: 5,
          mb: 2
        }}
        onClick={redirectToReview}
      >
        Done
      </Button>
    </Container>
  );
};


export default ReceiptBlock;