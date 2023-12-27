import { Helmet } from "react-helmet-async"
import Receipt from "src/sections/Receipt"

const ReceiptPage = () => (
  <>
    <Helmet>
      <title> Melani Bakehouse </title>
    </Helmet>

    <Receipt />
  </>
)

export default ReceiptPage;