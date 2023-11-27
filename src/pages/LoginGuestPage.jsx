import { Helmet } from "react-helmet-async"
import LoginGuest from "src/sections/LoginGuest"

const LoginGuestPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <LoginGuest />
  </>
)

export default LoginGuestPage;