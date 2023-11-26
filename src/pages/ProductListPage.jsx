import { Helmet } from "react-helmet-async"
import ProductList from "src/sections/ProductList";


const ProductListPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <ProductList />
  </>
)

export default ProductListPage;