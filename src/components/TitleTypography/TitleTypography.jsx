import {
  Typography, Button
} from "@mui/material";
import PropTypes from "prop-types";

const TitleTypography = ({ value, color }) => (
  <Typography
    sx={{ 
      mb: 2.0, 
      mt:2.5, 
      display:"flex", 
      justifyContent:"space-between",
      alignItems:"center"} }
    color={color}
    fontWeight={600}
  >
    {value}
    <Button 
      size="small" 
      sx={{color:"black"}}>
      See All
    </Button>
  </Typography>
)

TitleTypography.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TitleTypography.defaultProps = {
  color: "#3D2209"
}


export default TitleTypography;