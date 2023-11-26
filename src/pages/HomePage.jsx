import { Helmet } from "react-helmet-async"
import { Home } from "src/sections/Home";


const HomePage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Home />
  </>
)

export default HomePage;