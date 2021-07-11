import Item from "./Item";
import inventoryData from "../inventoryData";
import "../styles/Shop.css";

function Shop(props) {
    return (
        <main className="shop">
            <ul>
                {inventoryData.map((item) => {
                    return (
                        <li key={item.name}>
                            <Item itemData={item} addToCart={props.updateCart} />
                        </li>
                    );
                })}
            </ul>
        </main>
    );
}

export default Shop;