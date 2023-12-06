import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";


const CategoryCard = ({product}) => (
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
    </CardContent>
  </Card>
  


  
)
  

CategoryCard.propTypes = {
  product: PropTypes.object,
};


export default CategoryCard;
