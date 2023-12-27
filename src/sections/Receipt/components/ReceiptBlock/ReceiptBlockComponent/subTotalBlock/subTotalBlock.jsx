import {
  Container,
  Typography,
  Box
} from "@mui/material";


const subTotalBlock = () => {
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
      <Typography sx={{ mb: 5 }}>
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
      </Typography>
    </Container >
  )
}

export default subTotalBlock;