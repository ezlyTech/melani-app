import {
  Container,
  Typography,
} from "@mui/material";

const Card = () => {
  const test = "Card";

  return (
    <Container>
      <Typography sx={{ mb: 5 }}>
        {test}
      </Typography>
    </Container >
  )
}

export default Card;