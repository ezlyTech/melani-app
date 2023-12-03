import { alpha, useTheme } from "@mui/material/styles"
import { Box, Stack, Button, Container } from "@mui/material"
import { bgGradient } from "src/theme/css"
import Logo from "src/components/logo"
import Iconify from "src/components/iconify";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "src/routes/hooks";


const Login = () => {

  const { loginWithRedirect } = useAuth0();
  const theme = useTheme()
  const router = useRouter()

  const handleClick = () => {
    loginWithRedirect()
  }

  const handleLoginGuest = () => {
    router.push("/home");
  }

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
        position: "relative",
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: "20%", md: "24%" },
          left: { xs: "30%", md: "47%" },
          width: "160px",
          height: "15vh",
        }}
      />

      <Stack alignItems='center' justifyContent='center' sx={{ height: 1 }}>

        <Container>
          <Button
            fullWidth
            size='large'
            variant='outlined'
            sx={{
              borderColor: "#888C03",
              background: "#888C03",
              borderRadius: "31px",
              mb: 2,
              mt: 35,
              color: "#FFF"
            }}
            onClick={handleClick}
          >
            <Iconify icon="eva:facebook-fill" />
          Order with Facebook
          </Button>

          <Button
            fullWidth
            size='large'
            color='inherit'
            variant='outlined'
            sx={{ 
              borderColor: "#888C03",
              borderRadius: "31px",
            }}
            onClick={handleLoginGuest}
          >
          Order as Guest
          </Button>
        </Container>
        
      </Stack>
    </Box>
  )
}

export default Login;