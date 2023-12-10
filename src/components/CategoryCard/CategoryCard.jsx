import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";


const CategoryCard = ({product}) => (
  <Card sx={{
    minWidth: 90,
    maxWidth: 111,
    width: "100%",
    height: "100%",
    background: "#FFFAF6"
  }}>
    <CardMedia
      sx={{ height: 100 }}
      image={product.image}
      title="1"
    />
    <CardContent
      sx={{
        p: 1,
        pb: ".5em !important"
      }}>
      <Typography gutterBottom variant="caption" component="div" mb={0}>
        {product.name}
      </Typography>
    </CardContent>
  </Card>
)
  
CategoryCard.propTypes = {
  product: PropTypes.object,
};


export default CategoryCard;
