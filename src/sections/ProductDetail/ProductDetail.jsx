import {
  Card,
  CardMedia,
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  Tab,
  Button,
  Paper,
} from "@mui/material";
import {
  TabContext,
  TabList,
  TabPanel,
} from "@mui/lab";
import { useState } from "react";
import Iconify from "src/components/iconify";
import { ProductDetailInformationPanel, ProductDetailUploadsPanel } from "./components";

const ProductDetail = () => {
  const [value, setValue] = useState("1");
  const [quantity, setQuantity] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const sampleDetails = {
    name: "Biscuit Munch",
    price: "146.00",
    image: "/assets/images/products/detail1.png",
    rating: 3,
    information: "Lorem ipsum dolor sit amet consectetur. Eros laoreet cursus sapien ut vulputate.",
    option: ["slice", "whole"],
    uploads: [
      {
        id: 1,
        url: "/assets/images/products/1.png",
      },
      {
        id: 2,
        url: "/assets/images/products/2.png",
      },
      {
        id: 3,
        url: "/assets/images/products/3.png",
      },
      {
        id: 4,
        url: "/assets/images/products/4.png",
      },
      {
        id: 5,
        url: "/assets/images/products/5.png",
      },
      {
        id: 6,
        url: "/assets/images/products/6.png",
      },
    ],
  }

  return (
    <>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={sampleDetails.image}
        />
      </Card>
      <Container>
        <Grid container spacing={2} pt={2} pb={2}>
          <Grid item xs>
            <Typography fontWeight={600}>
              {sampleDetails.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: ".5em",
                mt: .5,
                color: "#525252"
              }}
            >
              Reviews 4.5 (89)
              <Rating
                name="read-only"
                value={sampleDetails.rating}
                readOnly
                size="small"
              />
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight={600}>₱ {sampleDetails.price}</Typography>
          </Grid>
        </Grid>

        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="tabs">
                <Tab label="Information" value="1" />
                <Tab label="Uploads" value="2" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <ProductDetailInformationPanel
                information={sampleDetails.information}
                option={sampleDetails.option}
              />
            </TabPanel>
            <TabPanel value="2">
              <ProductDetailUploadsPanel uploads={sampleDetails.uploads} />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <Paper
        elevation={4}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          borderRadius: "20px 20px 0 0",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={handleDecrement}
            sx={{
              minWidth: "auto",
              mr: 1,
              color: quantity === 0 ? "#B1B1B1" : "#333333"
            }}
          >
            <Iconify icon="eva:minus-outline" />
          </Button>
          <Typography
            sx={{
              background: "#FFF2ED",
              color: "#DDA15E",
              p: ".5em 1em .5em 1em",
              borderRadius: "4px",
              fontWeight: 600,
              minWidth: "55px",
              textAlign: "center"
            }}>
            {quantity}
          </Typography>
          <Button
            onClick={handleIncrement}
            sx={{
              minWidth: "auto",
              ml: 1,
              color: "#333333"
            }}
          >
            <Iconify icon="eva:plus-outline" />
          </Button>
        </Box>
        <Box>
          <Button variant="contained" sx={{ ml: 2 }}>
            <Iconify icon="eva:shopping-cart-outline" mr={1} />
            Add to Cart
          </Button>
        </Box>
      </Paper >
    </>
  )
}

export default ProductDetail;
