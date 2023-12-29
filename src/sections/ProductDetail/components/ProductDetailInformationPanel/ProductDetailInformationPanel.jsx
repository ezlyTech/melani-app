import {
  Typography,
  FormGroup,
  FormControlLabel,
  Chip,
  Box,
  IconButton
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Iconify from "src/components/iconify";

const ProductDetailInformationPanel = ({ information }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Box 
        sx={{
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          m:"-24px -40px 10px -40px", 
          background: "#FFF1E6"
        }}>
        <Typography 
          variant="body2" 
          sx={{
            fontWeight: "bold",
            pl: 5
          }}>
          Discount Available:
          <span 
            style={{
              fontWeight: "normal",
              paddingLeft:5
            }}>
              Student, Senior, PWDs
          </span>
        </Typography>
        <IconButton sx={{pr: 5}}>
          <Iconify icon="mdi:information-outline"/>
        </IconButton>
      </Box>
      
      <Typography variant="body2">{information}</Typography>

      <Box mt={2}>
        <Typography variant="subtitle2">Select option:</Typography>

        <FormGroup>
          <Box 
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
              ml: 1.5
            }}>
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
