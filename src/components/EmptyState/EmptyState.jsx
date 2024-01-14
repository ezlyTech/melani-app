import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const EmptyState = ({value}) => (
  <Typography 
    variant="body2" 
    sx={{
      display: "flex", 
      justifyContent: "center"
    }}
  >
      No {value} to show.
  </Typography>
)

EmptyState.propTypes = {
  value: PropTypes.string,
};



export default EmptyState;
