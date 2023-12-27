import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import Logo from "src/components/logo";
import { ReceiptBlock } from "src/sections/Receipt/components/Index";



const Receipt = () => (
  <Container sx={{
    display: "grid",
    placeItems: "center",
    position: "absolute",
    top: "15vh",
  }}>
    <Box
      sx={{
        position: "fixed",
        top: 0,
        background: "#F9FAFB",
        width: "100%"
      }}
    >
      <Logo sx={{ display: "flex", margin: "0 auto" }} />
    </Box>

    <Typography align="center"
      sx={{
        color: "#3D2209",
        fontWeight: "bold"
      }}>
      Please go to the counter and show this receipt
    </Typography>

    <ReceiptBlock />
  </Container >
)

export default Receipt;







