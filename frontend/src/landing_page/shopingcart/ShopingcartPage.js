import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";

const ShopingcartPage = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <div>
      <Hero
        cartItems={[]}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default ShopingcartPage;


// import React from 'react';

// import Hero from './Hero';


// function ShoppingCartPage () {
//     return (
//         <>
//           <Hero />
//         </>
//     );
// }

// export default ShoppingCartPage;
