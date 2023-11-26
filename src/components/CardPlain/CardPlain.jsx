import {
  Container,
  Typography,
} from "@mui/material";

const CardPlain = () => {
  const test = "CardPlain";

  return (
    <Container>
      <Typography sx={{ mb: 5 }}>
        {test}
      </Typography>
    </Container >
  )
}

export default CardPlain;