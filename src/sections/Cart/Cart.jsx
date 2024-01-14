import React, { useEffect, useState, useContext } from "react";
import axios from "axios"
import UserContext from "src/UserContext";
import CartItemBlock from "./components/CartItemBlock";
import CartPreviewBlock from "./components/CartPreviewBlock";

export default function Cart() {
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
  });
  const [productData, setProductData] = useState([])
  const [cartData, setCartData] = useState([])
  // const [selectedOptions, setSelectedOptions] = useState([])
  // const [selectedAddons, setSelectedAddons] = useState([])
  const { isCartUpdated, setIsCartUpdated } = useContext(UserContext)

  const sampleCartItems = [
    {
      id: 1,
      name: "Chocolate Obscura",
      image: "/assets/images/products/1.png",
      price: "154.00",
      quantity: quantities[1] || 0,
    },
    {
      id: 2,
      name: "Biscuit Munch",
      image: "/assets/images/products/2.png",
      price: "154.00",
      quantity: quantities[2] || 0,
    },
    {
      id: 3,
      name: "Alfredo Penne",
      image: "/assets/images/products/3.png",
      price: "154.00",
      quantity: quantities[3] || 0,
    },
    {
      id: 4,
      name: "Cinnamon Rolls",
      image: "/assets/images/products/4.png",
      price: "154.00",
      quantity: quantities[4] || 0,
    },
  ];

  const optionChange = (event, i, j) => {
    // OLD DATA STRUCTURE
    // const modifiedSelectedOptions = [...selectedOptions]
    // modifiedSelectedOptions[i][j] = event.target.value
    // setSelectedOptions(modifiedSelectedOptions)

    // NEW DATA STRUCTURE
    const modifiedCartData = [...cartData]
    modifiedCartData[i].selectedVariation[j] = event.target.value
    setCartData(modifiedCartData)

    sessionStorage.setItem("lineItems", JSON.stringify(modifiedCartData))
  };

  const clearAddons = (id, i, j) => {
    // OLD DATA STRUCTURE
    // const modifiedSelectedAddons = [...selectedAddons]
    // setSelectedAddons(modifiedSelectedAddons[i][j].filter((addon) => addon.id !== id))

    // NEW DATA STRUCTURE
    const modifiedCartData = [...cartData]
    modifiedCartData[i].selectedAddons = modifiedCartData[i].selectedAddons.filter((addon) => addon.id !== id)
    setCartData(modifiedCartData)

    sessionStorage.setItem("lineItems", JSON.stringify(modifiedCartData))
  }

  const handleItemDelete = (index) => {
    // OLD DATA STRUCTURE
    // const modifiedSelectedOptions = [...selectedOptions]
    // modifiedSelectedOptions.splice(index, 1)

    // const modifiedSelectedAddons = [...selectedAddons]
    // modifiedSelectedAddons.splice(index, 1)

    // setSelectedOptions(modifiedSelectedOptions)
    // setSelectedAddons(modifiedSelectedAddons)


    // NEW DATA STRUCTURE
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
  };

  const handleDecrement = (index) => {
    const modifiedCartData = [...cartData]

    if (modifiedCartData[index].quantity > 1) {
      modifiedCartData[index].quantity -= 1
      setCartData(modifiedCartData)
    }
  };

  useEffect(() => {
    const cartItemData = JSON.parse(sessionStorage.getItem("lineItems"))

    if (cartItemData) {
      setCartData(cartItemData)
      // setSelectedOptions([cartItemData.map((item, i) => item.selectedVariation)])
      // setSelectedAddons([cartItemData.map((item, i) => item.selectedAddons)])
    }

  }, [])

  useEffect(() => {
    console.log("cart Items: ", cartData)
    // console.log("selected Options: ", selectedOptions)
    // console.log("selected Addons: ", selectedAddons)
    console.log("Product Data: ", productData)
  }, [cartData, productData])

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
        quantities={quantities}
        setQuantities={setQuantities}
        // selectedOptions={selectedOptions}
        cartData={cartData}
        optionChange={optionChange}
        clearAddons={clearAddons}
        deleteItem={handleItemDelete}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <CartPreviewBlock
        sampleCartItems={sampleCartItems}
        quantities={quantities}
      />
    </>
  );
}
