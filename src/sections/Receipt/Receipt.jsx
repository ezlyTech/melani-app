import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import Logo from "src/components/logo";
import { ReceiptBlock } from "src/sections/Receipt/components/Index";

const Receipt = () => {
  const [receiptData, setReceiptData] = useState()
  const { receiptNo } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const receipt = await axios.get(`http://localhost:3031/api/order/receipt/${receiptNo}`)
        if (receipt.data) {
          setReceiptData(receipt.data)
          setIsLoading(false)
          console.log(receipt.data)
        }

      } catch (err) {
        console.log(err)
        isLoading(false)
      }
    }
    fetchData()
  }, [isLoading, receiptNo])


  return (
    !isLoading &&
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

      <ReceiptBlock
        receiptData={receiptData}
      />
    </Container >
  )
}

export default Receipt;







