import { Helmet } from "react-helmet-async"
import { Home } from "src/sections/home";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> Melani Bakehouse </title>
      </Helmet>

      <Home />
    </>
  )
}
