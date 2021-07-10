import { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  var totalNumberOfItems = cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  function addToCart(e) {
    var itemName = e.target.getAttribute("data-name");
    var itemPrice = Number(e.target.getAttribute("data-price").slice(1));
    var itemQuantity = Number(document.getElementById(itemName).value);

    if (itemQuantity === 0) {
      return;
    }

    var newCart = cartItems.slice();

    var itemFound = newCart.find((item) => {
      return item.name === itemName;
    });

    if (itemFound) {
      itemFound.quantity += itemQuantity;
    } else {
      let newItem = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
      };
      newCart.push(newItem);
    }

    setCartItems(newCart);
  }

  function removeCartItem(e) {
    var itemName = e.target.getAttribute("data-name");
    
    var newCart = cartItems.filter((item) => {
      return item.name !== itemName;
    });
    setCartItems(newCart);
  }

  function changeQuantity(e) {
    var itemName = e.target.getAttribute("data-name");
    var newQuantity = Number(e.target.value);

    var newCart = cartItems.slice();
    var indexToUpdate = newCart.findIndex((item) => {
      return item.name === itemName;
    });

    if (newQuantity === 0) {
      newCart.splice(indexToUpdate, 1);
    } else {
      newCart[indexToUpdate].quantity = newQuantity;
    }

    setCartItems(newCart);
  }
  
  function clearCart() {
    setCartItems([]);
  }

  function handleCheckout() {
    alert("Thanks for shopping with us!");
    clearCart();
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Poké Mart</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({totalNumberOfItems})</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop updateCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart 
            items={cartItems} removeItem={removeCartItem} 
            changeQuantity={changeQuantity} clearCart={clearCart} 
            handleCheckout={handleCheckout} 
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
