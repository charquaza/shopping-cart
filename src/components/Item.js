function Item(props) {
    var itemData = props.itemData;

    var isNotAvailable = !props.itemData.price.startsWith("$");

    function decrement(e) {
        var itemName = e.target.getAttribute("data-name");
        var inputElem = document.getElementById(itemName);
        var itemQuantity = Number(inputElem.value);

        if (itemQuantity !== 0) {
            inputElem.value = itemQuantity - 1;
        }
    }

    function increment(e) {
        var itemName = e.target.getAttribute("data-name");
        var inputElem = document.getElementById(itemName);
        var itemQuantity = Number(inputElem.value);

        if (itemQuantity < 99) {
            inputElem.value = itemQuantity + 1;
        }
    }

    return (
        <>
            <img src={itemData.src} alt={itemData.name} />
            <h2>{itemData.name}</h2>
            <p>{itemData.description}</p>
            <p>{itemData.price}</p>
            <button 
                onClick={decrement} data-name={itemData.name} 
                disabled={isNotAvailable}
            >-</button>
            <input 
                type="number" min="0" max="99" 
                disabled={isNotAvailable} id={itemData.name} 
                defaultValue="0" 
            />
            <button 
                onClick={increment} data-name={itemData.name} 
                disabled={isNotAvailable}
            >+</button>
            <button 
                onClick={props.addToCart} disabled={isNotAvailable} 
                data-name={itemData.name} data-price={itemData.price}
            >Add to Cart</button>
        </>
    );
}

export default Item;