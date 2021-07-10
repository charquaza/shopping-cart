import Item from "./Item";
import template from "../template";
import "../styles/Shop.css";

function Shop(props) {
    return (
        <main className="shop">
            <ul>
                {template.map((item) => {
                    return (
                        <li key={item.name}>
                            <Item template={item} addToCart={props.updateCart} />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default Shop;