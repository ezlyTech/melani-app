import {
  Typography, Button
} from "@mui/material";
import PropTypes from "prop-types";

const TitleTypography = ({ value, color, hasBtn }) => (
  <Typography
    sx={{
      mb: 2.0,
      mt: 2.5,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}
    color={color}
    fontWeight={600}
  >
    {value}
    {hasBtn && (
      <Button
        size="small"
        sx={{ color: "black" }}>
        See All
      </Button>
    )}
  </Typography>
)

TitleTypography.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  hasBtn: PropTypes.bool,
};

TitleTypography.defaultProps = {
  color: "#3D2209",
  hasBtn: false,
}


export default TitleTypography;