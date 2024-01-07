import {
  Typography,
  FormGroup,
  FormControlLabel,
  // FormControl,
  // RadioGroup,
  // Radio,
  Chip,
  Box,
  Divider,
  // Button
} from "@mui/material";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const ProductDetailInformationPanel = ({
  information,
  options,
  onVariationChange,
  selectedVariation
}) => {
  // const [selectedAddons, setSelectedAddons] = useState(Array(options.length).fill(""));
  const [isFocused, setIsFocused] = useState(false);

  // const handleAddonsChange = (event, i) => {
  //   const modifiedAddons = [...selectedAddons]
  //   modifiedAddons[i] = event.target.value
  //   setSelectedAddons(modifiedAddons)
  // };

  // const clearAddons = (index) => {
  //   const clearedAddons = [...selectedAddons]
  //   clearedAddons[index] = ""
  //   setSelectedAddons(clearedAddons)
  // };

  // useEffect(() => {
  //   setSelectedAddons(options.addons.map((option) => option.variations[0].name));
  // }, [options.addons]);


  useEffect(() => {
    console.log("options", options)
  }, [options])
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
              }-
            </Box>
          </FormGroup>
        </Box>
      )}

      {/* Addons */}

      {/* {
        options.addons.map((addon, i) =>
          <Box mt={3} key={i}>
            <Typography variant="subtitle2">
              {addon.name}
              <span style={{ float: "right" }}>
                <Button
                  sx={{ fontWeight: 500 }}
                  size="small"
                  disabled={selectedAddons[i] === ""}
                  onClick={() => clearAddons(i)}
                >
                  Clear
                </Button>

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
                aria-labelledby={`addon-radio-group-${i}`}
                name={`addon-radio-group-${i}`}
                value={selectedAddons[i]}
                onChange={(event) => handleAddonsChange(event, i)}
              >
                {
                  addon.variations.map((variation, j) =>
                    <FormControlLabel
                      key={j}
                      value={variation.name}
                      control={<Radio size="small" />}
                      label={(
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                          <Typography fontSize='14px'>
                            {variation.name}
                          </Typography>
                          <Typography fontSize='14px' color='#525252'>
                            {`₱ + ${variation.cost.toFixed(2)}`}
                          </Typography>
                        </Box>
                      )} />
                  )
                }

              </RadioGroup>
            </FormControl>
          </Box>
        )
      } */}

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
  options: PropTypes.array,
  onVariationChange: PropTypes.func,
  selectedVariation: PropTypes.array,
};

export default ProductDetailInformationPanel;
