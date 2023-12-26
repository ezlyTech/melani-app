import React, { useState } from "react";
import CartItemBlock from "./components/CartItemBlock";
import CartPreviewBlock from "./components/CartPreviewBlock";

export default function Cart() {
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
  });

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

  return (
    <>
      <CartItemBlock
        sampleCartItems={sampleCartItems}
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
