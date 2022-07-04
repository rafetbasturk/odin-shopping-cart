import { useGlobalContext } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Home from "./components/Home";
import SharedProductsLayout from "./components/SharedProductsLayout";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Error from "./components/Error";

function App() {
  const { isLoading, items, addToCart, cart, setCart, handleSubmit } = useGlobalContext()
  const count = cart.reduce((prev, curr) => prev + curr.count, 0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout count={count} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<SharedProductsLayout />}>
            <Route index element={<Products isLoading={isLoading} items={items} addToCart={addToCart}/>}/>
            <Route path=":productId" element={<SingleProduct items={items} handleSubmit={handleSubmit} />} />
          </Route>
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
