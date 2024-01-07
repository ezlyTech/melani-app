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
import { useEffect, useState } from "react";
import Iconify from "src/components/iconify";
import { useParams } from "react-router-dom";
import axios from "axios"
import {
  ProductDetailInformationPanel,
  ProductDetailUploadsPanel,
  ProductDetailReviewsPanel,
} from "./components";

const ProductDetail = () => {
  const [value, setValue] = useState("1");
  const [quantity, setQuantity] = useState(0);
  const [productDetails, setProductDetails] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedVariation, setSelectedVariation] = useState([]);
  const { productID } = useParams()

  const handleVariationChange = (variation, i) => {
    const modifiedVariation = [...selectedVariation];
    modifiedVariation[i] = variation;
    setSelectedVariation(modifiedVariation);
  };

  // const clearVariation = (index) => {
  //   const clearedVariations = [...selectedVariation]
  //   clearedVariations[index] = ""
  //   setSelectedVariation(clearedVariations)
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    console.log(productID)
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(`http://localhost:3031/api/items/single/${productID}`)
        setProductDetails(productData.data)
        setIsLoading(false)
        console.log(productData.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [productID])

  useEffect(() => {
    if (productDetails && productDetails.option) {
      setSelectedVariation(productDetails.option.map((option) => option.variations[0]));
    }
  }, [productDetails?.option, productDetails]);


  useEffect(() => {
    console.log(selectedVariation)
  }, [selectedVariation])


  const SampleReviews = [
    {
      name: "Alex Kim",
      rating: 4,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit necessitatibus nostrum.",
    },
    {
      name: "Justin Timberlake",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit necessitatibus nostrum.",
    },
    {
      name: "Ji Chang Wook",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit necessitatibus nostrum.",
    },
    {
      name: "Steph",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugit necessitatibus nostrum.",
    },
  ]

  return (
    !isLoading &&
    <>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={productDetails.image}
        />
      </Card>
      <Container>
        <Grid container spacing={2} pt={2} pb={2}>
          <Grid item xs>
            <Typography fontWeight={600}>
              {productDetails.name}
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
              Reviews {productDetails.rating} (89)
              <Rating
                name="read-only"
                value={productDetails.rating}
                readOnly
                size="small"
              />
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography fontWeight={600}>₱ {productDetails.price}</Typography>
          </Grid>
        </Grid>

        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="tabs">
                <Tab label="Information" value="1" />
                <Tab label="Reviews" value="2" />
                <Tab label="Uploads" value="3" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <ProductDetailInformationPanel
                information={productDetails.information}
                options={productDetails.option}
                onVariationChange={handleVariationChange}
                selectedVariation={selectedVariation}
              />
            </TabPanel>
            <TabPanel value="2">
              <ProductDetailReviewsPanel reviews={SampleReviews} />
            </TabPanel>
            <TabPanel value="3">
              <ProductDetailUploadsPanel uploads={productDetails.uploads} />
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
