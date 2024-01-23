import React, { 
} from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Iconify from "../iconify/iconify";

const BackButton = ({buttonStyle, iconStyle}) => {
  const back = useNavigate();

  return (
    <Button
      onClick={() => back(-1)} style={buttonStyle}>
      <Iconify
        icon="eva:arrow-back-fill"
        sx={iconStyle
          // {
          //   width: "100%",
          //   height: "100%",
          //   color: "primary.contrastText",
          // }
        }
      />
    </Button>
  )
}

BackButton.propTypes ={
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
}

export default BackButton;
