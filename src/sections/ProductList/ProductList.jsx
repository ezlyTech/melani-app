import {
  Chip,
  Container,
  Grid,
  Box,
  CircularProgress
} from "@mui/material";
import { useState, useEffect } from "react";
import { ProductCard, TitleTypography } from "src/components";
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom";
import ProductFilter from "./components";

const RATING_OPTIONS = [
  "up4Star",
  "up3Star",
  "up2Star",
  "up1Star",
];
const RATING_LABELS = {
  up4Star: "4+",
  up3Star: "3+",
  up2Star: "2+",
  up1Star: "1+",
};

const PRICE_OPTIONS = [
  {
    value: "below",
    label: "0 - 500"
  },
  {
    value: "between",
    label: "500 - 1000"
  },
  {
    value: "above",
    label: "1000 - 2000"
  },
];

const ProductList = () => {
  const { categoryName, categoryID } = useParams();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [minPriceFilter, setMinPriceFilter] = useState(0)
  const [maxPriceFilter, setMaxPriceFilter] = useState(2000)
  const [filters, setFilters] = useState({
    price: null,
    rating: null,
  });
  const [error, setError] = useState(null); // Add state for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3031/api/items/category/${categoryID}`);
        setProductData(response.data);
        setIsLoading(false);
        console.log(response);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryID]);

  const handleMaxPriceFilterChange = (event) => {
    setMaxPriceFilter(event.target.value);
  };

  const handleMinPriceFilterChange = (event) => {
    setMinPriceFilter(event.target.value);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleRemoveFilter = (filterKey) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterKey]: null }));
  };

  const applyFilters = (products) => {
    let filteredProducts = [...products];

    if (!Number.isNaN(minPriceFilter || !Number.isNaN(maxPriceFilter))){
      filteredProducts = filteredProducts.filter((product) => 
        parseFloat(product.price) >= minPriceFilter &&
        parseFloat(product.price) <= maxPriceFilter
      );
    }

    if (filters.price === "below") {
      filteredProducts = filteredProducts.filter((product) => parseFloat(product.price) < 500);
    } else if (filters.price === "between") {
      filteredProducts = filteredProducts.filter(
        (product) => parseFloat(product.price) >= 500 && parseFloat(product.price) <= 1000
      );
    } else if (filters.price === "above") {
      filteredProducts = filteredProducts.filter((product) => parseFloat(product.price) > 1000);
    }

    if (filters.rating) {
      const minRating = parseInt(filters.rating?.substr(2, 1), 10);
      filteredProducts = filteredProducts.filter((product) => product.rating >= minRating);
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters(productData);

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
        <Container>
          
          {error && <p>Error: {error}</p>}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "16px",
              marginTop: ".5em",
            }}
          >
            {filters.price && (
              <Chip
                label={`Price: ${PRICE_OPTIONS.find((opt) => opt.value === filters.price)?.label}`}
                onDelete={() => handleRemoveFilter("price")}
              />
            )}
            {filters.rating && (
              <Chip
                label={`Rating: ${RATING_LABELS[filters.rating]}`}
                onDelete={() => handleRemoveFilter("rating")}
              />
            )}
          </div>

          <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={6}>
              <TitleTypography value={categoryName} />
            </Grid>
            <Grid item xs={6} >
              <ProductFilter
                openFilter={openFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
                filters={filters}
                setFilters={setFilters}
                ratingOptions={RATING_OPTIONS}
                priceOptions={PRICE_OPTIONS}
                minPriceFilter={minPriceFilter}
                maxPriceFilter={maxPriceFilter}
                onMinPriceFilterChange={handleMinPriceFilterChange}
                onMaxPriceFilterChange = {handleMaxPriceFilterChange}
                
              />
            </Grid>
          </Grid>



          <Grid container spacing={2}>
            {filteredProducts.map((product, index) => (
              <Grid item xs key={index}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/product-detail/${product.product_id}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      console.log("test")
                    }
                  }}
                >
                  <ProductCard product={product} />
                </div>
              </Grid>
            ))}
          </Grid>
        </Container >
      )}
   
    </>
  );
};

export default ProductList;