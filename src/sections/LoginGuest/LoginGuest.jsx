import {
  TextField,
  Container,
  Stack,
  Button
} from "@mui/material/";
import Logo from "src/components/logo";
import { useRouter } from "src/routes/hooks";
import React, { useState, useContext } from "react";
import UserContext from "../../UserContext";

const LoginGuest = () => {
  const router = useRouter();
  const { setName } = useContext(UserContext);

  const [name, setNameLocal] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  // for errors
  const [nameError, setNameError] = useState(false);
  const [tableNumberError, setTableNumberError] = useState(false);

  const handleNameChange = (e) => {
    setNameLocal(e.target.value);
    setNameError(e.target.value.trim() === "");
  };

  const handleTableNumberChange = (e) => {
    setTableNumber(e.target.value);
    setTableNumberError(e.target.value.trim() === "" || !/^\d+$/.test(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError && !tableNumberError) {
      console.log(name, `Table: ${tableNumber}`);
      setName(name.trim());
      router.push("/home");
    }
  };

  const getTableNumberLabel = () => (tableNumberError ? "Enter your table number" : "Table Number");


  return (
    <Stack
      alignItems='center'
      justifyContent='space-evenly'
      sx={{ position: "relative" }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: "40%", md: "47%" },
        }}
      />

      <Container sx={{
        display: "grid",
        placeItems: "center",
        position: "absolute",
        top: "25vh",
      }}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={handleNameChange}
            id="name"
            label="Please enter your name"
            variant="outlined"
            required
            error={nameError}
            sx={{
              width: "100%",
              paddingBottom: "20px"
            }}
          />

          <TextField
            onChange={handleTableNumberChange}
            type="number"
            id="tableNum"
            label={getTableNumberLabel()}
            variant="outlined"
            required
            error={tableNumberError}
            sx={{ width: "100%" }}
          />

          <Button
            fullWidth
            size='large'
            color='inherit'
            variant='outlined'
            sx={{
              borderColor: "#888C03",
              borderRadius: "30px",
              mt: 20,
            }}
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </form>
      </Container>
    </Stack>
  );
};

export default LoginGuest;
