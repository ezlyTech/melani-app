import {
  Typography, Button
} from "@mui/material";
import PropTypes from "prop-types";

const TitleTypography = ({ value, color, hasBtn, onClick, marginTop }) => (
  <Typography
    sx={{
      mb: 2.0,
      mt: marginTop,
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
        sx={{ color: "black" }}
        onClick={onClick}
      >
        See All
      </Button>
    )}
  </Typography>
)

TitleTypography.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  hasBtn: PropTypes.bool,
  onClick: PropTypes.func,
  marginTop: PropTypes.number,
};

TitleTypography.defaultProps = {
  color: "#3D2209",
  hasBtn: false,
  marginTop: 2.5,
}


export default TitleTypography;