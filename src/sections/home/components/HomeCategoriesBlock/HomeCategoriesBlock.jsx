import {
  Grid,
  Container
} from "@mui/material";
import {
  CategoryCard,
  TitleTypography,
} from "src/components";

import { PropTypes } from "prop-types";

const HomeCategoriesBlock = ({ categories }) => (
  <Container sx={{ bgcolor: "#FFFAF6" }}>
    <TitleTypography value="Categories" />
    <Grid container spacing={1} sx={{ display: "flex", justifyContent: "space-between", pb: 4 }}>
      {categories.map((product, index) => (
        <Grid item xs key={index}>
          <CategoryCard product={product} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

HomeCategoriesBlock.propTypes = {
  categories: PropTypes.array,
};

export default HomeCategoriesBlock;
