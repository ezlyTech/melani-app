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
} from "@mui/material";

const RATING_OPTIONS = ["up4Star", "up3Star", "up2Star", "up1Star"];

const PRICE_OPTIONS = [
  { value: "below", label: "Below ₱300" },
  { value: "between", label: "Between ₱300 - ₱500" },
  { value: "above", label: "Above ₱500" },
];

const ProductFilter = ({ openFilter, onOpenFilter, onCloseFilter, filters, setFilters }) => {
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
      <RadioGroup value={filters.price} onChange={handlePriceChange}>
        {PRICE_OPTIONS.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  const renderRating = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Rating</Typography>
      <RadioGroup value={filters.rating} onChange={handleRatingChange}>
        {RATING_OPTIONS.map((item, index) => (
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
};

export default ProductFilter;
