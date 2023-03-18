import CartPurchases from "./components/Cart/CartPurchases";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";

const App = () => {

  return (
    <>
      <MainHeader />
      <CartPurchases />
      <Products />
    </>
  );
}

export default App;
