import {
  Typography,
  Grid,
} from "@mui/material";
import { ProductCard } from "src/components"

const HomeMenuBlock = () => {
  const test = "Menu";

  return (
    <>
      <Typography sx={{ mb: 5 }}>
        {test}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs>
          <ProductCard />
        </Grid>
        <Grid item xs />
      </Grid>
    </>
  )
}

export default HomeMenuBlock;
