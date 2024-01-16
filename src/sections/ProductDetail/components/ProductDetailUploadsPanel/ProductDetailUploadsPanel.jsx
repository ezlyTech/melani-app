import { Card, CardMedia, Grid } from "@mui/material";
import PropTypes from "prop-types";
import EmptyState from "src/components/EmptyState";

const ProductDetailUploadsPanel = ({ uploads }) => (
  !uploads ? (
    <EmptyState value="uploads" />
  ) : (
    <div>
      <Grid container spacing={2}>
        {uploads.map((item) => (
          <Grid item xs>
            <Card
              key={item.id}
              sx={{
                minWidth: 135,
                maxWidth: 180,
                width: "100%",
                height: "100%"
              }}
            >
              <CardMedia
                sx={{ height: 220 }}
                image={item.url}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
    
  
)

ProductDetailUploadsPanel.propTypes = {
  uploads: PropTypes.array,
};

export default ProductDetailUploadsPanel
