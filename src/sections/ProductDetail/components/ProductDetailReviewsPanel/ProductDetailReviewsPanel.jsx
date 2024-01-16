import { Avatar, Box, Divider, Grid, Rating, Typography } from "@mui/material";
import PropTypes from "prop-types";
import EmptyState from "src/components/EmptyState";


const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

const stringAvatar = (name) => {
  const nameParts = name.split(" ");
  const initials = nameParts.length > 1 ? `${nameParts[0][0]}${nameParts[1][0]}` : name[0];

  return {
    sx: {
      bgcolor: stringToColor(name),
      scale: "0.75",
    },
    children: initials,
  };
};

const ProductDetailReviewsPanel = ({ reviews }) => (

  !reviews ? (
    <EmptyState value="reviews" />
  ) : (
    reviews.map((item) => (
      <Box>
        <Grid container spacing={0.5} sx={{ alignItems: "start", }}>
          <Grid item xs={1.75}>
            <Avatar
              sx={{ width: 20, height: 20 }}
              {...stringAvatar(item.customerName)}
            />
          </Grid>
          <Grid item xs mt={.75}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="subtitle2"> {item.customerName} </Typography>
              <Rating
                name="read-only"
                value={item.rating}
                readOnly
                size="small" />
            </Box>
            <Typography variant="caption">{item.review}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 1, mb: 1 }} />
      </Box >
    ))
  )
)

ProductDetailReviewsPanel.propTypes = {
  reviews: PropTypes.array,
};

export default ProductDetailReviewsPanel
