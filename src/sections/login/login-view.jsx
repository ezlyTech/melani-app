import { alpha, useTheme } from "@mui/material/styles"
import { Box, Stack, Button } from "@mui/material"
import { useRouter } from "src/routes/hooks"
import { bgGradient } from "src/theme/css"
import Logo from "src/components/logo"

export default function LoginView() {
  const theme = useTheme()
  const router = useRouter()

  const handleClick = () => {
    router.push("/home")
  }

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: "40%", md: "47%" },
        }}
      />

      <Stack alignItems='center' justifyContent='center' sx={{ height: 1 }}>
        <Button
          fullWidth
          size='large'
          color='inherit'
          variant='outlined'
          sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
          onClick={handleClick}
        >
          Order as Guest
        </Button>
      </Stack>
    </Box>
  )
}
