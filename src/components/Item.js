function Item(props) {
    var template = props.template;

    var isNotNumber = !props.template.price.startsWith("$");

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
            <img src={template.src} alt={template.name} />
            <h2>{template.name}</h2>
            <p>{template.description}</p>
            <p>{template.price}</p>
            <button 
                onClick={decrement} data-name={template.name} 
                disabled={isNotNumber}
            >-</button>
            <input 
                type="number" min="0" max="99" 
                disabled={isNotNumber} id={template.name} 
                defaultValue="0" 
            />
            <button 
                onClick={increment} data-name={template.name} 
                disabled={isNotNumber}
            >+</button>
            <button 
                onClick={props.addToCart} disabled={isNotNumber} 
                data-name={template.name} data-price={template.price}
            >Add to Cart</button>
        </>
    );
}

export default Item;