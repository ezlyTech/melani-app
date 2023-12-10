import {
  Typography,
  FormGroup,
  FormControlLabel,
  Chip,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const ProductDetailInformationPanel = ({ information }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Typography variant="body2">{information}</Typography>

      <Box mt={2}>
        <Typography variant="subtitle2">Select option:</Typography>

        <FormGroup>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 1.5 }}>
            <FormControlLabel
              control={
                <Chip
                  label="Sliced"
                  clickable
                  color={selectedOption === "sliced" ? "primary" : "default"}
                  onClick={() => handleOptionChange("sliced")}
                />
              }
            />
            <FormControlLabel
              control={
                <Chip
                  label="Whole"
                  clickable
                  color={selectedOption === "whole" ? "primary" : "default"}
                  onClick={() => handleOptionChange("whole")}
                />
              }
            />
          </Box>
        </FormGroup>
      </Box>
    </div>
  );
};

ProductDetailInformationPanel.propTypes = {
  information: PropTypes.string,
};

export default ProductDetailInformationPanel;
