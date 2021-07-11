import image1 from "./images/1-poke-ball.png";
import image2 from "./images/2-great-ball.png";
import image3 from "./images/3-ultra-ball.png";
import image4 from "./images/4-master-ball.png";
import image5 from "./images/5-premier-ball.png";

var inventoryData = [
    {
        src: image1, 
        name: "Poké Ball", 
        description: "A tool for catching wild Pokémon. Its catch rate multiplier is 1×.",
        price: "$200.00"
    },
    {
        src: image2, 
        name: "Great Ball", 
        description: "A good Ball with a higher catch rate than a Poké Ball. Its catch rate multiplier is 1.5×.",
        price: "$600.00"
    },
    {
        src: image3, 
        name: "Ultra Ball", 
        description: "A tool for catching wild Pokémon. Its catch rate multiplier is 2×.",
        price: "$1200.00"
    },
    {
        src: image4, 
        name: "Master Ball", 
        description: "The best Ball that catches a Pokémon without fail. Its catch rate multiplier is 255×.",
        price: "Out of Stock"
    },
    {
        src: image5, 
        name: "Premier Ball", 
        description: "A rare Ball made in commemoration of some event. Its catch rate multiplier is 1×.",
        price: "Not currently for sale"
    },
];

export default inventoryData;