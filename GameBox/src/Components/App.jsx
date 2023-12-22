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
          <div className="footer-content"></div>
        </footer>
      </div>
    </>
  );
}

export default App;
