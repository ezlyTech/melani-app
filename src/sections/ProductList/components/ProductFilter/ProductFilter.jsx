import PropTypes from "prop-types";
import Iconify from "src/components/iconify";
import Scrollbar from "src/components/scrollbar";
import {
  Box,
  Stack,
  Radio,
  Button,
  Drawer,
  Rating,
  Divider,
  RadioGroup,
  Typography,
  IconButton,
  FormControlLabel,
  TextField,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { useState } from "react";

const ProductFilter = ({
  openFilter,
  onOpenFilter,
  onCloseFilter,
  filters,
  setFilters,
  ratingOptions,
  priceOptions,
}) => {
  const [minPriceFilter, setMinPriceFilter] = useState(0)

  const handleMinPriceFilterChange = (event) => {
    setMinPriceFilter(event.target.value);
  };

  const [maxPriceFilter, setMaxPriceFilter] = useState(2000)

  const handleMaxPriceFilterChange = (event) => {
    setMaxPriceFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setFilters((prevFilters) => ({ ...prevFilters, price: event.target.value }));
  };

  const handleRatingChange = (event) => {
    setFilters((prevFilters) => ({ ...prevFilters, rating: event.target.value }));
  };

  const handleClearAll = () => {
    setFilters({
      price: null,
      rating: null,
    });
  };

  const renderPrice = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Price</Typography>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <TextField
            id="outlined-number"
            label="Min"
            type="number"
            value={minPriceFilter}
            onChange={handleMinPriceFilterChange}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .MuiInputBase-root": {height: 40}
            }}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-number"
            label="Max"
            type="number"
            value={maxPriceFilter}
            onChange={handleMaxPriceFilterChange}
            InputLabelProps={{
              shrink: true,
            }}
            sx={{
              "& .MuiInputBase-root": {height: 40}
            }}
          />
        </Grid>
      </Grid>
      <ToggleButtonGroup
        exclusive
        value={filters.price}
        onChange={handlePriceChange}
        sx={{width: "100%", display:"flex"}}
      >
        {priceOptions.map((item) => (
          <ToggleButton 
            key={item.value} 
            value={item.value} 
            aria-label="left aligned"
            sx={{height: 45, fontSize:11, fontWeight: "normal", flex: 1}}
          >
            {item.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

    </Stack>
  );

  const renderRating = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Rating</Typography>
      <RadioGroup value={filters.rating} onChange={handleRatingChange}>
        {ratingOptions.map((item, index) => (
          <FormControlLabel
            key={item}
            value={item}
            control={
              <Radio
                disableRipple
                color="default"
                icon={<Rating readOnly value={4 - index} />}
                checkedIcon={<Rating readOnly value={4 - index} />}
                sx={{
                  "&:hover": { bgcolor: "transparent" },
                }}
              />
            }
            label="& Up"
            sx={{
              my: 0.5,
              borderRadius: 1,
              "&:hover": { opacity: 0.48 },
            }}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
        sx={{ p: 0 }}
      >
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: "none", overflow: "hidden" },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            {renderPrice}
            {renderRating}
          </Stack>
        </Scrollbar>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            onClick={handleClearAll}
            color="inherit"
            variant="outlined"
            startIcon={<Iconify icon="ic:round-clear-all" />}
          >
            Clear All
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

ProductFilter.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  filters: PropTypes.object,
  setFilters: PropTypes.func,
  priceOptions: PropTypes.object,
  ratingOptions: PropTypes.object,
}

export default ProductFilter;
