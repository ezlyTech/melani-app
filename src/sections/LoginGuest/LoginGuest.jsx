import {
  Box,
  TextField,
  Container
} from "@mui/material/"

const LoginGuest = () => (
  <>
    <Box sx={{m: "20px"}}>
      <TextField id="fullName" label="Full Name" variant="outlined" />
    </Box>
    <Container>
      <TextField id="fullName" label="Full Name" variant="outlined" />
    </Container>
  </>
  
)

export default LoginGuest
