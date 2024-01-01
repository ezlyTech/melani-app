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
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductDetailInformationPanel = ({ information, options }) => {
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleVariationChange = (variation) => {
    setSelectedVariation(variation);
  };

  const handleAddonsChange = (event) => {
    setSelectedAddons(event.target.value);
  };

  const clearVariation = () => {
    setSelectedVariation(null);
  };

  const clearAddons = () => {
    setSelectedAddons(null);
  };

  return (
    <div>
      <Typography variant="body2">{information}</Typography>

      {/* Options with no additional cost */}

      {options.free.map((option, i) =>
        <Box mt={3} key={i}>
          <Typography variant="subtitle2">
            {option.name}
            <span style={{ float: "right" }}>
              <Button sx={{ fontWeight: 500 }} size="small" disabled={!selectedVariation} onClick={clearVariation}>Clear</Button>
            </span>
          </Typography>
          <FormGroup>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 1.5 }}>
              {
                option.variations.map((variation, j) =>
                  <FormControlLabel
                    key={j}
                    control={
                      <Chip
                        label={variation}
                        clickable
                        color={selectedVariation === variation ? "primary" : "default"}
                        onClick={() => handleVariationChange(variation)}
                      />
                    }
                  />
                )
              }
            </Box>
          </FormGroup>
        </Box>
      )}

      <Box mt={3}>
        <Typography variant="subtitle2">
          Size
          <span style={{ float: "right" }}>
            <Button sx={{ fontWeight: 500 }} size="small" disabled={!selectedAddons} onClick={clearAddons}>Clear</Button>
          </span>
        </Typography>
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
            value={selectedAddons}
            onChange={handleAddonsChange}
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
  options: PropTypes.object,
};

export default ProductDetailInformationPanel;
