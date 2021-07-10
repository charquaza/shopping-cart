import { Link } from "react-router-dom";

function Cart(props) {
    var items = props.items;

    if (items.length > 0) {
        return (
            <main>
                <ul>
                    {items.map((item) => {
                        return (
                            <li key={item.name}>
                                <button 
                                    onClick={props.removeItem} data-name={item.name}
                                >×</button>
                                <p>{item.name}</p>
                                <p>${item.price}</p>
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
                <button onClick={props.clearCart}>Clear Cart</button>
                <p>Total: ${items.reduce((sum, currItem) => {
                    return sum + (currItem.price * currItem.quantity);
                }, 0)}</p>
                <button onClick={props.handleCheckout}>Checkout</button>
            </main>
        );
    }

    return (
        <main>
            <p>Your cart is empty.</p>
            <Link to="/shop">Continue Shopping</Link>
        </main>
    );
}

export default Cart;