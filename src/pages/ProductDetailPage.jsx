import { Helmet } from "react-helmet-async"
import ProductDetail from "src/sections/ProductDetail";


const ProductDetailPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <ProductDetail />
  </>
)

export default ProductDetailPage;