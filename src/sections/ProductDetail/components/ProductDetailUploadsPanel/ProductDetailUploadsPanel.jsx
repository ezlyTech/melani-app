import { Card, CardMedia, Grid } from "@mui/material";
import PropTypes from "prop-types";

const ProductDetailUploadsPanel = ({ uploads }) => (
  <div>
    <Grid container spacing={2}>
      {uploads.map((item, i) => (
        <Grid item xs>
          <Card
            key={i}
            sx={{
              minWidth: 135,
              maxWidth: 180,
              width: "100%",
              height: "100%"
            }}
          >
            <CardMedia
              sx={{ height: 220 }}
              image={item}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  </div>
)

ProductDetailUploadsPanel.propTypes = {
  uploads: PropTypes.array,
};

export default ProductDetailUploadsPanel
