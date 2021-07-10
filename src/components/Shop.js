import Item from "./Item";
import template from "../template";

function Shop(props) {
    return (
        <main>
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