import {
  Container,
  Typography,
} from "@mui/material";


const ProductList = () => {
  const test = "Product Lists";

  return (
    <Container>
      <Typography sx={{ mb: 5 }}>
        {test}
      </Typography>
    </Container >
  )
}

export default ProductList;