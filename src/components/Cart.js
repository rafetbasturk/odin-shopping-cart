import { Link } from "react-router-dom";
import { BiCart, BiPlus, BiMinus, BiTrash } from "react-icons/bi";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((prev, curr) => prev + curr.count * curr.price, 0)

  const removeItem = e => {
    const id = Number(e.currentTarget.dataset.id)
    setCart(cart.filter(item => item.id !== id))
  }

  const increase = e => {
    const id = Number(e.currentTarget.dataset.id)
    const match = cart.find(item => item.id === id)
    match.count++
    setCart(cart.map(item => item.id === id ? match : item))
  }

  const decrease = e => {
    const id = Number(e.currentTarget.dataset.id)
    const match = cart.find(item => item.id === id)
    match.count--
    setCart(cart.map(item => item.id === id ? match : item))
  }

  return (
    <main className="cart">
      {!cart.length
        ? <section className="empty">
          <BiCart />
          <p>Your cart is empty</p>
          <Link to="/products" className="cart-link">Products</Link>
        </section>
        : <>
          <section className="cart-item-container">
            {cart.map(item => {
              return (
                <article className="cart-item" key={item.id}>
                  <div className="cart-image">
                    <img src={item.images[0]} alt={item.description} />
                  </div>
                  <div className="cart-detail">
                    <h4 className="cart-title">{item.title}</h4>
                    <p className="cart-price"><span>$</span>{item.price}</p>
                  </div>
                  {item.count !== 1 &&
                    <BiTrash className="icon-trash" data-id={item.id} onClick={removeItem} />}
                  <div className="cart-count">
                    <BiPlus onClick={increase} data-id={item.id} className="icon" />
                    <span>{item.count}</span>
                    {item.count !== 1
                      ? <BiMinus className="icon" data-id={item.id} onClick={decrease} />
                      : <BiTrash className="icon" data-id={item.id} onClick={removeItem} />}
                  </div>
                </article>)
            })}
          </section>
          <section className="total">
            <p className="price">{total.toFixed(2)}</p>
            <button>Checkout</button>
          </section>
        </>
      }
    </main>
  );
}

export default Cart;