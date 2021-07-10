import { Link } from "react-router-dom";
import "../styles/Cart.css";

function Cart(props) {
    var items = props.items;

    if (items.length > 0) {
        return (
            <main className="cart">
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.name}>
                                <button 
                                    onClick={props.removeItem} data-name={item.name}
                                >×</button>
                                <p>{item.name}</p>
                                <p className="price">${item.price}</p>
                                <p>×</p>
                                <input 
                                    onChange={props.changeQuantity} type="number" min="0" max="99" 
                                    value={item.quantity} data-name={item.name}
                                />
                                <p>${item.price * item.quantity}</p>
                            </li>
                        );
                    })}
                </ul>
                <div className="total-bar">
                    <button onClick={props.clearCart} className="clear-cart">Clear Cart</button>
                    <p>Total: ${items.reduce((sum, currItem) => {
                        return sum + (currItem.price * currItem.quantity);
                    }, 0)}</p>
                </div>
                <button onClick={props.handleCheckout} className="checkout">Checkout</button>
            </main>
        );
    }

    return (
        <main className="cart">
            <p>Your cart is empty.</p>
            <Link to="/shop">Continue Shopping</Link>
        </main>
    );
}

export default Cart;