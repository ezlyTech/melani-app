import {
  TextField,
  Container,
  Button,
  Box,
  Typography
} from "@mui/material/";
import Logo from "src/components/logo";
import { useRouter } from "src/routes/hooks";
import React, { useState } from "react";
// import UserContext from "../../UserContext";

const LoginGuest = () => {
  const router = useRouter();
  // const { setName } = useContext(UserContext);

  const [name, setNameLocal] = useState("");
  // const [tableNumber, setTableNumber] = useState("");
  // for errors
  const [nameError, setNameError] = useState(false);
  // const [tableNumberError, setTableNumberError] = useState(false);

  const handleNameChange = (e) => {
    setNameLocal(e.target.value);
    setNameError(e.target.value.trim() === "");
  };

  // const handleTableNumberChange = (e) => {
  //   setTableNumber(e.target.value);
  //   setTableNumberError(e.target.value.trim() === "" || !/^\d+$/.test(e.target.value));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameError) {
      // console.log(name, `Table: ${tableNumber}`);
      // setName(name.trim());
      sessionStorage.setItem("username", name)
      router.push("/home");
    }
  };

  // const getTableNumberLabel = () => (tableNumberError ? "Enter your table number" : "Table Number");


  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
        <Logo />
      </Box>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography variant="subtitle2" align="center">
            Welcome to Melani&apos;s Bakehouse! <br />
            Before you indulge in our delightful treats, let&apos;s make it personal. <br /> <br />
            Please enter your name below, and we&apos;ll tailor your experience just for you. 🌟
          </Typography>
        </Box>

        <Box mt={10}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              onChange={handleNameChange}
              id="name"
              label="Please enter your name"
              variant="standard"
              required
              error={nameError}
              size="medium"
              sx={{
                width: "100%",
                paddingBottom: "20px"
              }}
              inputProps={{ maxLength: 20 }}
            />

            {/* <TextField
              onChange={handleTableNumberChange}
              type="number"
              id="tableNum"
              label={getTableNumberLabel()}
              variant="outlined"
              required
              error={tableNumberError}
              sx={{ width: "100%" }}
            /> */}

            <Box mt={10}>
              <Button
                fullWidth
                size='large'
                variant='contained'
                sx={{
                  borderRadius: "30px",
                }}
                onClick={handleSubmit}
              >
                Continue
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginGuest;
