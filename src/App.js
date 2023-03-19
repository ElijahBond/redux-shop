import CartPurchases from "./components/Cart/CartPurchases";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";
import { useSelector } from 'react-redux'

const App = () => {

  const isVisible = useSelector(state => state.cartSlice.isVisible)

  return (
    <>
      <MainHeader />
      {isVisible && <CartPurchases />}
      <Products />
    </>
  );
}

export default App;
