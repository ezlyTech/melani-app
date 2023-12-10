import {
  Card,
  CardMedia,
  Container
} from "@mui/material";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  return (
    <>
      <Card sx={{ borderRadius: 0 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/assets/images/banner.png"
        />
      </Card>
      <HomeCategoriesBlock />
      <Container>
        <HomeMenuBlock title="Signature Drinks" />
        <HomeMenuBlock title="Drinks" />
        <HomeMenuBlock title="Cakes" />
        <HomeMenuBlock title="Ala Cartes" />
        <HomeMenuBlock title="Pastas" />
        <HomeMenuBlock title="Starters" />
        <HomeMenuBlock title="Burger & Sandwich" />
      </Container>
    </>
  );
}
