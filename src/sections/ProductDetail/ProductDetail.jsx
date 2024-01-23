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
  CircularProgress
} from "@mui/material";
import {
  TabContext,
  TabList,
  TabPanel,
} from "@mui/lab";
import { useEffect, useState, useContext } from "react";
import UserContext from "src/UserContext";
import Iconify from "src/components/iconify";
import { useParams } from "react-router-dom";
import axios from "axios"
import {
  ProductDetailInformationPanel,
  ProductDetailUploadsPanel,
  ProductDetailReviewsPanel,
} from "./components";

const ProductDetail = () => {
  const { isCartUpdated, setIsCartUpdated } = useContext(UserContext)
  const [value, setValue] = useState("1");
  const [quantity, setQuantity] = useState(1);
  const [productDetails, setProductDetails] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedVariation, setSelectedVariation] = useState([]);
  const [selectedVariantID, setSelectedVariantID] = useState("")
  const [selectedAddons, setSelectedAddons] = useState([""]);
  const [selectedAddonList, setSelectedAddonList] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [unitPrice, setUnitPrice] = useState()
  const [note, setNote] = useState("")
  // const [buttonDisabled, setButtonDisabled] = useState(false)
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

  const handleAddonsChange = (event, index) => {
    console.log("Handling addon change");
    const modifiedAddons = [...selectedAddons];
    modifiedAddons[index] = event.target.value !== undefined ? event.target.value : "";

    if (event.target.checked) {
      Object.keys(productDetails.addons).forEach((i) => {
        Object.keys(productDetails.addons[i].modifier_options).forEach((j) => {
          if (productDetails.addons[i].modifier_options[j].id === event.target.value) {
            setSelectedAddonList((prevList) => [
              ...prevList,
              {
                id: productDetails.addons[i].modifier_options[j].id,
                name: productDetails.addons[i].modifier_options[j].name,
                price: productDetails.addons[i].modifier_options[j].price,
              }
            ])
          }
        });
      });
    } else {
      setSelectedAddonList(selectedAddonList.filter((addon) => addon.id !== event.target.value))
    }


    setSelectedAddons(modifiedAddons);
  };

  // const clearAddons = (index) => {
  //   const clearedAddons = [...selectedAddons]
  //   clearedAddons[index] = ""
  //   setSelectedAddons(clearedAddons)
  //   setSelectedAddonList([])
  // };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = async () => {
    const userData = JSON.parse(sessionStorage.getItem("userData"))
    const lineItems = [
      {
        id: productID,
        selectedVariation,
        selectedAddons: selectedAddonList,
        quantity,
        unitPrice,
        totalPrice,
        variantID: selectedVariantID,
        note,
      }
    ]

    const currentCartItems = JSON.parse(sessionStorage.getItem("lineItems"))

    // LOGIC TO FIND DUPLICATE ITEM
    if (currentCartItems) {
      const duplicateIndex = currentCartItems.findIndex((item) => {
        const isIdMatch = item.id === lineItems[0].id;
        const isVariationMatch = JSON.stringify(item.selectedVariation) === JSON.stringify(lineItems[0].selectedVariation);
        const isAddonsMatch = JSON.stringify(item.selectedAddons) === JSON.stringify(lineItems[0].selectedAddons);

        return isIdMatch && isVariationMatch && isAddonsMatch;
      });

      if (duplicateIndex > -1) {
        console.log("Duplicate item found at index:", duplicateIndex);
        const modifiedCart = [...currentCartItems]
        modifiedCart[duplicateIndex].quantity += quantity
        sessionStorage.setItem("lineItems", JSON.stringify(modifiedCart))
      } else {
        currentCartItems.push(lineItems[0])
        sessionStorage.setItem("lineItems", JSON.stringify(currentCartItems))
      }
    } else {
      sessionStorage.setItem("lineItems", JSON.stringify(lineItems))
    }

    if (sessionStorage.getItem("isAuthenticated")) {
      await axios.post("http://localhost:3031/api/users/cart/add", { lineItems, email: userData.email })
    }

    setIsCartUpdated(!isCartUpdated)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get(`http://localhost:3031/api/items/${productID}`)
        setProductDetails(productData.data)

        if (productData.data.variants.length === 1) {
          setSelectedVariantID(productData.data.variants[0].variantID)
        }

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
    if (productDetails && productDetails.variants) {
      const matchingVariant = productDetails.variants.find((variant) => {

        if (selectedVariation.length === 1) {
          return variant.option1 === selectedVariation[0];
        }

        if (selectedVariation.length === 2) {
          return (
            variant.option1 === selectedVariation[0] &&
            variant.option2 === selectedVariation[1]
          );
        }

        if (selectedVariation.length === 3) {
          return (
            variant.option1 === selectedVariation[0] &&
            variant.option2 === selectedVariation[1] &&
            variant.option3 === selectedVariation[2]
          );
        }

        return false;
      });

      if (matchingVariant) {
        setSelectedVariantID(matchingVariant.variantID)
        setUnitPrice(matchingVariant.price)
        setTotalPrice(matchingVariant.price * quantity)
      }
    }
  }, [
    selectedVariation,
    productDetails?.variants,
    productDetails,
    quantity,
  ]);

  useEffect(() => {
    const updatePrice = async () => {
      if (productDetails && productDetails.variants) {
        const matchingVariant = await productDetails.variants.find((variant) => variant.variantID === selectedVariantID);

        if (matchingVariant) {
          if (selectedAddonList.length > 0) {
            let addonTotal = 0
            Object.values(selectedAddonList).forEach((addon) => {
              addonTotal += addon.price;
            });

            setTotalPrice((matchingVariant.price + addonTotal) * quantity)
          }
          else {
            setTotalPrice(matchingVariant.price * quantity);
          }
        }
      }
    };

    updatePrice()
  }, [
    selectedVariantID,
    productDetails?.variants,
    productDetails,
    quantity,
    selectedAddonList
  ])

  useEffect(() => {
    console.log("addons", selectedAddonList)
    console.log("options", selectedVariation)
  }, [selectedAddonList, selectedVariation])

  // useEffect(() => {
  //   const currentCartItems = JSON.parse(sessionStorage.getItem("lineItems"));
  //   let matchedItem

  //   if (currentCartItems) {
  //     matchedItem = currentCartItems.find((item) => item.id === productID);
  //     // setButtonDisabled(!!matchedItem)

  //   } else {
  //     // setButtonDisabled(false)
  //   }


  // }, [productID, isCartUpdated])

  return (
    <>
      {isLoading && (
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh"
        }}>
          <CircularProgress variant="indeterminate" />
        </Box>
      )}

      {!isLoading && (
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
                  Reviews {productDetails.rating} ({productDetails.reviews.length})
                  <Rating
                    name="read-only"
                    value={productDetails.rating}
                    readOnly
                    size="small"
                  />
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ float: "right" }} fontWeight={600}>₱ {totalPrice}.00</Typography>
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
                    addons={productDetails.addons}
                    onVariationChange={handleVariationChange}
                    selectedVariation={selectedVariation}
                    // onAddonsClear={clearAddons}
                    onAddonsChange={handleAddonsChange}
                    selectedAddons={selectedAddons}
                    handleNoteChange={handleNoteChange}
                  />
                </TabPanel>
                <TabPanel value="2">
                  <ProductDetailReviewsPanel reviews={productDetails.reviews} />
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
              <Button
                variant="contained"
                sx={{ ml: 2 }}
                onClick={handleSubmit}
              // disabled={buttonDisabled}
              >
                <Iconify icon="eva:shopping-cart-outline" mr={1} />
                Add to Cart
              </Button>
            </Box>
          </Paper >
        </>
      )}
    </>
  )
}

export default ProductDetail;
