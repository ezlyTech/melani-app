import {
  TextField,
  Container,
  Stack,
  Button
} from "@mui/material/"
import Logo from "src/components/logo"
import { useRouter } from "src/routes/hooks";

const LoginGuest = () => {
  const router = useRouter()
  const handleLoginGuest = () => {   
    router.push("/home");
  }

  return(
  
    <Stack 
      alignItems='center' 
      justifyContent='space-evenly'  
      sx={{ position: "relative" }}>

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
        <TextField 
          id="userName" 
          label="Please enter your name" 
          variant="outlined"
          sx={{
            width: "100%",
            paddingBottom: "20px"
          }}/>

        <TextField 
          id="tableNumber" 
          label="Table Number" 
          variant="outlined" 
          sx={{width: "100%"}}/>

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
          onClick={handleLoginGuest}
        >
              Continue
        </Button>
      </Container>
    </Stack>
    
  )
}
  


export default LoginGuest
