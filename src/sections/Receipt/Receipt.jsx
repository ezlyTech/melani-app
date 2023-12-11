import {
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
    <Logo
      sx={{
        position: "fixed",
        top: { xs: 16, md: 24 },
        left: { xs: "40%", md: "47%" },
      }}
    />

    <Typography align="center" 
      sx={{
        color: "#3D2209",
        fontWeight: "bold"
      }}>
      Please go to the counter and show this receipt
    </Typography>

    <ReceiptBlock/>
  </Container >
)

export default Receipt;







