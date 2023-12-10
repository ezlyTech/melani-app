import {
  Chip,
  Container,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { ProductCard, TitleTypography } from "src/components";
import ProductFilter from "./components";

const RATING_OPTIONS = ["up4Star", "up3Star", "up2Star", "up1Star"];
const RATING_LABELS = {
  up4Star: "4+",
  up3Star: "3+",
  up2Star: "2+",
  up1Star: "1+",
};

const PRICE_OPTIONS = [
  { value: "below", label: "Below ₱300" },
  { value: "between", label: "Between ₱300 - ₱500" },
  { value: "above", label: "Above ₱500" },
];

const sampleProducts = [
  {
    id: 1,
    name: "Chocolate Obscura",
    image: "/assets/images/products/1.png",
    price: "78.00",
    rating: 2,
  },
  {
    id: 2,
    name: "Biscuit Munch",
    image: "/assets/images/products/2.png",
    price: "200.00",
    rating: 3,
  },
  {
    id: 3,
    name: "Alfredo Penne",
    image: "/assets/images/products/3.png",
    price: "154.00",
    rating: 5,
  },
  {
    id: 4,
    name: "Cinnamon Rolls",
    image: "/assets/images/products/4.png",
    price: "600.00",
    rating: 5,
  },
  {
    id: 5,
    name: "Velvet Eclipse",
    image: "/assets/images/products/5.png",
    price: "439.00",
    rating: 5,
  },
  {
    id: 6,
    name: "Strawberry Cake",
    image: "/assets/images/products/6.png",
    price: "136.00",
    rating: 2,
  },
];

const ProductList = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    price: null,
    rating: null,
  });

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

    // Apply price filter
    if (filters.price === "below") {
      filteredProducts = filteredProducts.filter((product) => parseFloat(product.price) < 300);
    } else if (filters.price === "between") {
      filteredProducts = filteredProducts.filter(
        (product) => parseFloat(product.price) >= 300 && parseFloat(product.price) <= 500
      );
    } else if (filters.price === "above") {
      filteredProducts = filteredProducts.filter((product) => parseFloat(product.price) > 500);
    }

    // Apply rating filter
    if (filters.rating) {
      const minRating = parseInt(filters.rating.substr(2, 1), 10);
      filteredProducts = filteredProducts.filter((product) => product.rating >= minRating);
    }

    return filteredProducts;
  };

  const filteredProducts = applyFilters(sampleProducts);

  return (
    <Container>
      <ProductFilter
        openFilter={openFilter}
        onOpenFilter={handleOpenFilter}
        onCloseFilter={handleCloseFilter}
        filters={filters}
        setFilters={setFilters}
        ratingOptions={RATING_OPTIONS}
        priceOptions={PRICE_OPTIONS}
      />

      {/* Display chips for selected filters */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px", marginTop: ".5em" }}>
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

      <TitleTypography value="Signature Dishes" />

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
