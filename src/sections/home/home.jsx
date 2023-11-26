import {
  Container,
  Typography,
} from "@mui/material";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Home
      </Typography>

      <HomeCategoriesBlock />
      <HomeMenuBlock />
    </Container>
  );
}
