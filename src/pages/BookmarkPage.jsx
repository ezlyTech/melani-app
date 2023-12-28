import { Helmet } from "react-helmet-async"
import Bookmark from "src/sections/Bookmark";


const BookmarkPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Bookmark />
  </>
)

export default BookmarkPage;