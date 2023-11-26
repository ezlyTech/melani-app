import { Helmet } from "react-helmet-async"
import Login from "src/sections/Login"

const LoginPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Login />
  </>
)

export default LoginPage;