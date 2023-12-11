import {
  Grid,
  Container
} from "@mui/material";
import {
  CategoryCard,
  TitleTypography,
} from "src/components";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const HomeCategoriesBlock = ({ categories }) => {
  const navigate = useNavigate()

  return (
    <Container sx={{ bgcolor: "#FFFAF6" }}>
      <TitleTypography value="Categories" />
      <Grid container spacing={1} sx={{ display: "flex", justifyContent: "space-between", pb: 4 }}>
        {categories.map((category, index) => (
          <Grid item xs key={index}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/product-list/${category.category_id}`)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/product-list/${category.category_id}`)
                }
              }}
            >
              <CategoryCard product={category} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container >
  )
}

HomeCategoriesBlock.propTypes = {
  categories: PropTypes.array,
};

export default HomeCategoriesBlock;
