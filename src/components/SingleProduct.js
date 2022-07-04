import { useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = ({ items, handleSubmit }) => {
  const { productId } = useParams()
  const product = items.find(item => item.id === Number(productId))
  const { id, title, images, description, price, rating } = product

  const [count, setCount] = useState(1);

  const handleChange = e => {
    setCount(e.target.value.replace(/\D/g, ''));
  }

  return (
    <article className="single-product" data-id={id}>
      <div className="image">
        <img src={images[0]} alt={description} />
      </div>
      <div className="details">
        <div className="top">
          <h3>{title}</h3>
          <div className="price-rating">
            <p className="price"><span>$</span>{price}</p>
            <p className="rating">{rating} ☆</p>
          </div>
          <p className="desc">{description}</p>
        </div>
        <form className="bottom" onSubmit={handleSubmit}>
          <input
            type="number"
            name="quantity"
            id="quantity"
            max={50}
            min={1}
            step={1}
            value={count}
            onChange={handleChange}
          />
          <button type="submit">Add to Cart</button>
        </form>
      </div>
    </article>
  );
}

export default SingleProduct;