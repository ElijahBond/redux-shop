import CartPurchases from "./components/Cart/CartPurchases";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";
import { useSelector } from 'react-redux'
import { useEffect } from "react";

const App = () => {

  const isVisible = useSelector(state => state.cartSlice.isVisible);
  const cart = useSelector(state => state.purchasesSlice);

  useEffect(() => {
    const sendCartData = async () => {
      const response = fetch('https://simple-store-redux-default-rtdb.firebaseio.com/purchases.json', 
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Error at sending cart data')
      }
    }
  }, [cart])

  return (
    <>
      <MainHeader />
      {isVisible && <CartPurchases />}
      <Products />
    </>
  );
}

export default App;
