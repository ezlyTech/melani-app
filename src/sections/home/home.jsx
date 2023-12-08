import {
  Container
} from "@mui/material";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  return (
    <Container>

      <HomeCategoriesBlock />
      <HomeMenuBlock />
    </Container>
  );
}
