import {
  TextField,
  Container,
  Stack,
  Button
} from "@mui/material/";
import Logo from "src/components/logo";
import { useRouter } from "src/routes/hooks";
import React, { useState } from "react";

const LoginGuest = () => {
  const router = useRouter();

  const [name, setName] = useState ("");
  const [tableNumber, setTableNumber] = useState ("");
  // for errors
  const [nameError, setNameError] = useState (false);
  const [tableNumberError, setTableNumberError] = useState (false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setTableNumberError(false);

    if (name === "") {
      setNameError(true);
    }

    const isNumeric = /^\d+$/.test(tableNumber);
    if (tableNumber === "" || !isNumeric) {
      setTableNumberError(true);
    }

    if (name && isNumeric) {
      console.log(name, `Table: ${  tableNumber}`);
      router.push("/home");
    }
  };
  const getTableNumberLabel = () => tableNumberError ? "Enter your table number" : "Table Number";
  
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setTableNumber(e.target.value)}
            id="tableNum" 
            label={getTableNumberLabel()}
            variant="outlined" 
            required
            error={tableNumberError}
            sx={{width: "100%"}}
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
