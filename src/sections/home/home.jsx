import {
  Card,
  CardMedia,
  Container,
  Typography
} from "@mui/material";
import { HomeCategoriesBlock, HomeMenuBlock } from "./components";

export default function Home() {
  const name = "John";

  return (
    <>
      <Container sx={{ bgcolor: "#FFEEE1" }}>
        <Typography
          mt={1} mb={1}
          variant="h4"
          color="#3D2209"
        >
          Welcome, {name}!
        </Typography>
      </Container>
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
