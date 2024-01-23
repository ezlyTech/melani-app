import {
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  // RadioGroup,
  // Radio,
  Chip,
  Box,
  Divider,
  // Button,
  Checkbox
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductDetailInformationPanel = ({
  information,
  options,
  onVariationChange,
  selectedVariation,
  addons,
  // onAddonsClear,
  onAddonsChange,
  selectedAddons,
  handleNoteChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <Typography variant="body2">{information}</Typography>

      {/* Options */}
      {options.map((option, i) =>
        <Box mt={3} key={i}>
          <Typography variant="subtitle2">
            {option.name}
            {/* <span style={{ float: "right" }}>
              <Button sx={{ fontWeight: 500 }} size="small" disabled={!selectedVariation} onClick={clearVariation}>Clear</Button>
            </span> */}
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
                        color={selectedVariation[i] === variation ? "primary" : "default"}
                        onClick={() => onVariationChange(variation, i)}
                      />
                    }
                  />
                )
              }
            </Box>
          </FormGroup>
        </Box>
      )}

      {/* Addons */}

      {
        addons.map((addon, i) =>
          <Box mt={3} key={i}>
            <Typography variant="subtitle2">
              {addon.name}
              <span style={{ float: "right" }}>
                {/* <Button
                  sx={{ fontWeight: 500 }}
                  size="small"
                  disabled={selectedAddons[i] === ""}
                  onClick={() => onAddonsClear(i)}
                >
                  Clear
                </Button> */}

              </span>
            </Typography>
            <Typography variant="caption">Select your addons</Typography> <br />
            <FormControl
              sx={{
                width: "100%",
                "& .MuiFormControlLabel-label": {
                  width: "100%"
                }
              }}>
              {/* <RadioGroup
                aria-labelledby={`addon-radio-group-${i}`}
                name={`addon-radio-group-${i}`}
                value={selectedAddons[i]}
                onChange={(event) => onAddonsChange(event, i)}
              > */}

              <FormGroup
                name={`addon-form-group-${i}`}
                value={selectedAddons[i]}
              >
                {
                  addon.modifier_options.map((variation, j) =>
                    <FormControlLabel
                      key={j}
                      value={variation.id}
                      control={<Checkbox size="small" />}
                      onChange={(event) => onAddonsChange(event, i)}
                      // onChange={(e) => console.log(e.target.checked)}
                      label={(
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                          <Typography fontSize='14px'>
                            {variation.name}
                          </Typography>
                          <Typography fontSize='14px' color='#525252'>
                            {`₱ + ${variation.price.toFixed(2)}`}
                          </Typography>
                        </Box>
                      )} />
                  )
                }

              </FormGroup>
            </FormControl>
          </Box>
        )
      }

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
          onChange={handleNoteChange}
        />
      </Box>
    </div >
  );
};

ProductDetailInformationPanel.propTypes = {
  information: PropTypes.string,
  options: PropTypes.array,
  onVariationChange: PropTypes.func,
  selectedVariation: PropTypes.array,
  addons: PropTypes.array,
  // onAddonsClear: PropTypes.func,
  onAddonsChange: PropTypes.func,
  selectedAddons: PropTypes.array,
  handleNoteChange: PropTypes.func,
};

export default ProductDetailInformationPanel;
