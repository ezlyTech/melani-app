import React, { useEffect, useState, useContext } from "react";
import axios from "axios"
import UserContext from "src/UserContext";
import CartItemBlock from "./components/CartItemBlock";
import CartPreviewBlock from "./components/CartPreviewBlock";

export default function Cart() {
  const { isCartUpdated, setIsCartUpdated } = useContext(UserContext)
  const [productData, setProductData] = useState([])
  const [cartData, setCartData] = useState([])
  const [updatedItemIndex, setUpdatedItemIndex] = useState()

  const optionChange = (event, i, j) => {
    const modifiedCartData = [...cartData]
    modifiedCartData[i].selectedVariation[j] = event.target.value
    setCartData(modifiedCartData)
    setUpdatedItemIndex([i, j])

    sessionStorage.setItem("lineItems", JSON.stringify(modifiedCartData))
  };

  const clearAddons = (id, i, j) => {
    const modifiedCartData = [...cartData]
    modifiedCartData[i].selectedAddons = modifiedCartData[i].selectedAddons.filter((addon) => addon.id !== id)
    setCartData(modifiedCartData)
    setUpdatedItemIndex([i, j])

    sessionStorage.setItem("lineItems", JSON.stringify(modifiedCartData))
  }

  const handleItemDelete = (index) => {
    const modifiedCartData = [...cartData]
    modifiedCartData.splice(index, 1)

    const modifiedProductData = [...productData]
    modifiedProductData.splice(index, 1)

    setCartData(modifiedCartData)
    setProductData(modifiedProductData)
    setIsCartUpdated(!isCartUpdated)

    sessionStorage.setItem("lineItems", JSON.stringify(modifiedCartData))
  };

  const handleIncrement = (index) => {
    const modifiedCartData = [...cartData]
    modifiedCartData[index].quantity += 1
    setCartData(modifiedCartData)
    setUpdatedItemIndex([index])
  };

  const handleDecrement = (index) => {
    const modifiedCartData = [...cartData]

    if (modifiedCartData[index].quantity > 1) {
      modifiedCartData[index].quantity -= 1
      setCartData(modifiedCartData)
      setUpdatedItemIndex([index])
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const lineItems = cartData.map((item) => (
        {
          variant_id: item.variantID,
          quantity: item.quantity,
        }
      ))

      const order = await axios.post("http://localhost:3031/api/order", lineItems)
      console.log(order.data)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const cartItemData = JSON.parse(sessionStorage.getItem("lineItems"))

    if (cartItemData) {
      setCartData(cartItemData)
    }

  }, [])

  /* eslint-disable */
  useEffect(() => {
    console.log("cart Items: ", cartData)
    console.log("Product Data: ", productData)

    let matchedVariant
    let i

    if (updatedItemIndex && productData.length > 0) {
      i = updatedItemIndex[0]

      matchedVariant = productData[i].variants.find((variant) => {
        if (cartData[i].selectedVariation.length === 1) {
          return variant.option1 === cartData[i].selectedVariation[0]
        }
        if (cartData[i].selectedVariation.length === 2) {
          return (
            variant.option1 === cartData[i].selectedVariation[0] &&
            variant.option2 === cartData[i].selectedVariation[1]
          )
        }
        if (cartData[i].selectedVariation.length === 3) {
          return (
            variant.option1 === cartData[i].selectedVariation[0] &&
            variant.option2 === cartData[i].selectedVariation[1] &&
            variant.option3 === cartData[i].selectedVariation[2]
          )
        }
        return false
      })
    }
    if (matchedVariant) {
      const modifiedCartData = [...cartData]
      modifiedCartData[i].variantID = matchedVariant.variantID
      modifiedCartData[i].unitPrice = matchedVariant.price
      modifiedCartData[i].totalPrice = modifiedCartData[i].quantity * matchedVariant.price
      console.log("matched variant: ", matchedVariant)
      setCartData(modifiedCartData)
    }

  }, [productData, updatedItemIndex])
  /* eslint-enable */

  useEffect(() => {
    const selectedItems = JSON.parse(sessionStorage.getItem("lineItems"))
    let selectedItemIDs

    if (selectedItems) {
      selectedItemIDs = selectedItems.map((item) => item.id)
    }

    const fetchData = async () => {
      try {
        const products = await axios.get(`http://localhost:3031/api/items/list/${JSON.stringify(selectedItemIDs)}`)
        setProductData(products.data)
        console.log(products.data)
      } catch (err) {
        console.log(err)
      }
    }

    if (selectedItems) fetchData()

  }, [])

  return (
    <>
      <CartItemBlock
        cartItems={productData}
        cartData={cartData}
        optionChange={optionChange}
        clearAddons={clearAddons}
        deleteItem={handleItemDelete}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <CartPreviewBlock
        cartData={cartData}
        handlePlaceOrder={handlePlaceOrder}
      />
    </>
  );
}
