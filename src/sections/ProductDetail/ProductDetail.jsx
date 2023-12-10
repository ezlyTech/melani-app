import {
  Card,
  CardMedia,
  Box,
  Container,
  Typography,
  Grid,
  Rating,
  Tab,
} from "@mui/material";
import {
  TabContext,
  TabList,
  TabPanel,
} from "@mui/lab";
import { useState } from "react";
import { ProductDetailInformationPanel, ProductDetailUploadsPanel } from "./components";

const ProductDetail = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sampleDetails = {
    name: "Biscuit Munch",
    price: "146.00",
    image: "/assets/images/products/detail1.png",
    rating: 3,
    information: "Lorem ipsum dolor sit amet consectetur. Eros laoreet cursus sapien ut vulputate.",
    option: ["slice", "whole"]
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
                mt: .5
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
            <TabPanel value="1"><ProductDetailInformationPanel /></TabPanel>
            <TabPanel value="2"><ProductDetailUploadsPanel /></TabPanel>
          </TabContext>
        </Box>
      </Container>
      <Box />
    </>
  )
}

export default ProductDetail;
