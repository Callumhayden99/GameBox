import "../styles/App.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="h1">GameBox</h1>
          <section>
            <nav>
                <NavLink>HOME</NavLink>
                <NavLink>PLAYSTATION</NavLink>
                <NavLink>XBOX</NavLink>
                <NavLink>CONSOLES</NavLink>
                <NavLink>BOARD GAMES</NavLink>
                <NavLink>ACCESSORIES</NavLink>
            </nav>
          </section>
        </header>
        <main>
          <div className="left-menu"></div>
          <div className="main-content"></div>
        </main>
        <footer>
          <h2 className="footer-header">Discover GameBox</h2>
          <div className="products">Our Products
          <ul>
            <li>Playstation 5 Consoles</li>
            <li>Xbox Consoles</li>
            <li>Deals</li>
            <li>Games</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
          </div>
          <div className="services">Our Services
          <ul>
            <li>Game Blog</li>
            <li>Pre-order</li>
            <li>Trade-in</li>
            <li>Pre-owned guarantee</li>
            <li>Store Finder</li>
          </ul>
          </div>
          <div className="customer">Customer Service
          <ul>
            <li>Help Home</li>
            <li>Contact Us</li>
            <li>Deliveries</li>
            <li>Returns Information</li>
          </ul>
          </div>
          <div className="about">About
          <ul>
            <li>News</li>
            <li>Privacy Centre</li>
            <li>Terms & Conditions</li>
            <li>Cookies</li>
          </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
