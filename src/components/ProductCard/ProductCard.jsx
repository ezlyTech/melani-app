import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import Iconify from "src/components/iconify";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => (
  <Card
    sx={{
      minWidth: 135,
      maxWidth: 180,
      width: "100%"
    }}
  >
    <CardMedia
      sx={{ height: 143 }}
      image={product.image}
      title="1"
    />
    <CardContent
      sx={{
        p: 1,
        pb: ".5em !important"
      }}
    >
      <Typography gutterBottom variant="subtitle2" mb={0}>
        {product.name}
      </Typography>
      <Rating
        name="read-only"
        value={product.rating}
        readOnly
        size="small"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography variant="body2" color="text.secondary">
          ₱ {product.price}
        </Typography>
        <IconButton>
          <Iconify icon="eva:bookmark-outline" />
        </IconButton>
      </Box>
    </CardContent>
  </Card> 
)

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;