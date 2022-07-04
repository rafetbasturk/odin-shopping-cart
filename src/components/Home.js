import { Link } from "react-router-dom";

const Home = () => {

  return (
    <main>
      <section className="home">
        <h3>The shopping cart for the Odin Project.</h3>
        <Link to="/products" className="home-link">Start Shopping</Link>
      </section>
    </main>
  );
}

export default Home;