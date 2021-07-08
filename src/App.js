import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>PokéMart</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
