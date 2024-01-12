import React, { useEffect, useState } from "react";
import axios from "axios"
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
      />
      <CartPreviewBlock
        sampleCartItems={sampleCartItems}
        quantities={quantities}
      />
    </>
  );
}
