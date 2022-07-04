import { Link } from "react-router-dom";

const Products = ({ isLoading, items, addToCart }) => {

  return (
    <main className="products">
      {!isLoading &&
        items.map(item => {
          const { id, title, images, description, price } = item

          return (
            <Link to={String(id)} key={id}>
              <article className="product" data-id={id} >
                <h4 className="title">{title}</h4>
                <div className="image-container" >
                  <img src={images[0]} alt={description} />
                </div>
                <p className="price"><span>$</span>{price}</p>
                <button onClick={addToCart} className="btn" >Add to Cart</button>
              </article>
            </Link>
          )
        })}
    </main>
  );
}

export default Products;