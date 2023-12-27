import { Helmet } from "react-helmet-async"
import { Cart } from "src/sections/Cart"

const CartPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Cart />
  </>
)

export default CartPage