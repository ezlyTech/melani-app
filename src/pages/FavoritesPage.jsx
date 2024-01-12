import { Helmet } from "react-helmet-async"
import Favorites from "src/sections/Favorites"


const FavoritesPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Favorites />
  </>
)

export default FavoritesPage;