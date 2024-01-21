import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Box,
  IconButton,
  Tooltip
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Iconify from "src/components/iconify";
import PropTypes from "prop-types";

const MAX_NAME_LINES = 2; // Maximum number of lines for the product name

const ProductCard = ({ product, handleFavoriteClick }) => {
  const navigate = useNavigate()

  return (
    <Card
      sx={{
        minWidth: 135,
        maxWidth: 180,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}

    >

      <CardMedia
        sx={{ height: 143 }}
        image={product.image}
        title={product.name}
        onClick={() => navigate(`/product-detail/${product.product_id}`)}
      />


      <CardContent
        sx={{
          p: 1,
          pb: ".5em !important",
          height: 120, // para ma set height ng card
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tooltip title={product.name} arrow>
          <Typography
            onClick={() => navigate(`/product-detail/${product.product_id}`)}
            gutterBottom
            variant="subtitle2"
            mb={0}
            sx={{
              flex: "1 0 auto",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: MAX_NAME_LINES,
            }}
          >
            {product.name}
          </Typography>
        </Tooltip>
        <Rating name="read-only" value={product.rating} readOnly size="small" />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            ₱ {product.price}.00
          </Typography>
          <IconButton onClick={() => handleFavoriteClick(product.product_id, product.isFavorite)}>
            <Iconify icon="eva:bookmark-outline" color={product.isFavorite ? "red" : "black"} />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object,
  handleFavoriteClick: PropTypes.func,
};

export default ProductCard;