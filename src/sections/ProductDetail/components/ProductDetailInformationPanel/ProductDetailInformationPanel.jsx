import {
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Radio,
  Chip,
  Box,
  Divider,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductDetailInformationPanel = ({ information }) => {
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleVariationChange = (option) => {
    setSelectedVariation(option);
  };

  const handleSizeChange = (option) => {
    setSelectedSize(option);
  };

  return (
    <div>
      <Typography variant="body2">{information}</Typography>

      {/* Option for Cakes */}
      <Box mt={3}>
        <Typography variant="subtitle2">Variation</Typography>
        <FormGroup>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 1.5 }}>
            <FormControlLabel
              control={
                <Chip
                  label="Sliced"
                  clickable
                  color={selectedVariation === "sliced" ? "primary" : "default"}
                  onClick={() => handleVariationChange("sliced")}
                />
              }
            />
            <FormControlLabel
              control={
                <Chip
                  label="Whole"
                  clickable
                  color={selectedVariation === "whole" ? "primary" : "default"}
                  onClick={() => handleVariationChange("whole")}
                />
              }
            />
          </Box>
        </FormGroup>
      </Box>

      {/* Option for Drinks */}
      <Box mt={3}>
        <Typography variant="subtitle2">Size</Typography>
        <FormGroup>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 1.5 }}>
            <FormControlLabel
              control={
                <Chip
                  label="16oz"
                  clickable
                  color={selectedSize === "16oz" ? "primary" : "default"}
                  onClick={() => handleSizeChange("16oz")}
                />
              }
            />
            <FormControlLabel
              control={
                <Chip
                  label="24oz"
                  clickable
                  color={selectedSize === "24oz" ? "primary" : "default"}
                  onClick={() => handleSizeChange("24oz")}
                />
              }
            />
          </Box>
        </FormGroup>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle2">Upgrade your drink</Typography>
        <Typography variant="caption">Select one</Typography> <br />
        <FormControl
          sx={{
            width: "100%",
            "& .MuiFormControlLabel-label": {
              width: "100%"
            }
          }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            // defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="espresso"
              control={<Radio size="small" />}
              label={(
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Typography fontSize='14px'>
                    Espresso Shot
                  </Typography>
                  <Typography fontSize='14px' color='#525252'>
                    ₱ + 20.00
                  </Typography>
                </Box>
              )} />
            <FormControlLabel
              value="milk"
              control={<Radio size="small" />}
              label={(
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Typography fontSize='14px'>
                    Milk
                  </Typography>
                  <Typography fontSize='14px' color='#525252'>
                    ₱ + 20.00
                  </Typography>
                </Box>
              )} />
            <FormControlLabel
              value="vanilla"
              control={<Radio size="small" />}
              label={(
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                  <Typography fontSize='14px'>
                    Vanilla
                  </Typography>
                  <Typography fontSize='14px' color='#525252'>
                    ₱ + 20.00
                  </Typography>
                </Box>
              )} />
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider sx={{ mt: 2 }} />

      {/* Special Instructions */}
      <Box mt={3}>
        <Typography variant="subtitle2">Special Instructions</Typography>
        <Typography variant="caption">Please let us know if you are allergic to anything or if we need to avoid anything.</Typography> <br />
        <textarea
          name=""
          id=""
          cols="30"
          rows="4"
          placeholder="e.g no mayo"
          style={{
            width: "100%",
            background: "#F9FAFB",
            borderRadius: "4px",
            borderColor: isFocused ? "#888C03" : "#E7E7E7",
            fontSize: "12px",
            padding: "1em",
            marginTop: "8px",
            outline: "none",
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Box>
    </div>
  );
};

ProductDetailInformationPanel.propTypes = {
  information: PropTypes.string,
};

export default ProductDetailInformationPanel;
