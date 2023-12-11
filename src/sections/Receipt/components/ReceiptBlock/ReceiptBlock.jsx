import {
  Container,
  Typography,
  Box,
  Button
} from "@mui/material";
import React from "react";


const ReceiptBlock = () => {
  const store = "Melani's Bakehouse";
  const address = "30 Bayacal Street, Sabutan, Silang, Cavite, Philippines";
  const orderNum = 69; 
  const cashierName = "Soobin"

  const items = [
    { name: "Double Choco Cake", price: 120.00 },
    { name: "Biscuit Munch", price: 146.00 },
  ]

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const discountRate = 0.1; // 10% discount rate
  const discount = subtotal * discountRate;
  const total = subtotal - discount;
  
  
  return (
    <Container>
      <Typography 
        align="center"
        sx={{mb: 1,
          "& h4": {mb: 1}
        }}
      >
        <h4>{store}</h4>
        {address}
      </Typography>

      <Box
        sx={{
          "& h5":{
            margin: 1
          }
        }}
      >
        <Typography align="center"
          sx={{ 
            mb: 3,
            "& h1": {mb: 0, mt: 2 }
          }}
        >
          <h1>{orderNum}</h1>
          Order Number
        </Typography>
        <h5>Time & Date: 5:53 03/04/19</h5>
        <h5>Cashier: {cashierName}</h5>
      </Box>

      <Box 
        sx={{ 
          pb: 5,
          borderTop: 1,
          "& ul": {
            listStyleType: "none",
            pl: 1,
            "& li":{
              display: "flex",
              justifyContent: "space-between", 
              marginBottom: "8px",
              fontWeight: "bold",
            }
          }
        }} >
        
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <span>{item.name}:</span>
              <span>₱{item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </Box>

      <Box>
        <Typography
          sx={{
            display: "flex",
            flexDirection: "column",
            borderTop: "2px dashed",
            mb: 2,
            "& strong": {
              mt: 1,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            },
          }}
        >
          <strong>
            <span>Subtotal:</span>
            <span >₱{subtotal.toFixed(2)}</span>
          </strong>

          <strong>
            <span>
        Discount: Student ({(discountRate * 100).toFixed(2)}%):
            </span>
            <span>-₱{discount.toFixed(2)}</span>
          </strong>
          
        </Typography>

          
        
        <Box 
          sx={{
            borderTop: 1,
          }}>
          <Typography variant="h3"
            sx={{
              display: "flex", 
              justifyContent: "space-between"
            }}
          >
            <strong>Amount Due:</strong> ₱{total.toFixed(2)}
          </Typography>
          
        </Box>
      </Box>
      <subTotalBlock/>

      <Button
        fullWidth
        size='large'
        variant='outlined'
        sx={{
          borderColor: "#888C03",
          background: "#888C03",
          borderRadius: "31px",
          mb: 2,
          mt: 6,
          color: "#FFF"
        }}
        onClick={console.log("Clicked")}
      >
          DONE
      </Button>
    </Container>
  );
};


export default ReceiptBlock;