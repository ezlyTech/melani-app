import { Helmet } from "react-helmet-async"
import Review from "src/sections/Review";


const ReviewPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Review />
  </>
)

export default ReviewPage;