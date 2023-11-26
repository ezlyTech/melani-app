import {
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const TitleTypography = ({ value, color }) => (
  <Typography
    sx={{ mb: 2.5 }}
    color={color}
    fontWeight={600}
  >
    {value}
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