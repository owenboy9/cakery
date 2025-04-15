import strawberrySwirl from '../assets/cupcakes/Rainbow.jpg';
import chocoDream from '../assets/cupcakes/purple.jpg';
import lemonSunshine from '../assets/cupcakes/bloodorange.jpg';
import redVelvetBliss from '../assets/cupcakes/Butterfly.jpg';
import caramelCrunch from '../assets/cupcakes/brown.jpg';
import vanillaSparkle from '../assets/cupcakes/pink.jpg';
import blueberryBurst from '../assets/cupcakes/blue.jpg';
import matchaWhisper from '../assets/cupcakes/green.jpg';

import rusticRose from '../assets/weddings/one.jpg';
import classicPearl from '../assets/weddings/two.jpg';
import lavenderDream from '../assets/weddings/three.jpg';
import bohoBliss from '../assets/weddings/four.jpg';
import goldenElegance from '../assets/weddings/five.jpg';
import modernMarble from '../assets/weddings/six.jpg';
import floralFantasy from '../assets/weddings/seven.jpg';
import berryRomance from '../assets/weddings/eight.jpg';

const products = [
  // cupcakes
  {
    id: 1,
    type: "cupcake",
    name: "vanilla bliss",
    price: "$3.50",
    ingredients: ["vanilla", "buttercream", "sprinkles"],
    description: "a classic vanilla cupcake topped with creamy buttercream and rainbow sprinkles.",
    bestPairedWith: "chamomile tea",
    image: vanillaSparkle
  },
  {
    id: 2,
    type: "cupcake",
    name: "choco lava",
    price: "$4.00",
    ingredients: ["dark chocolate", "ganache", "cocoa nibs"],
    description: "rich chocolate cupcake with a gooey molten center and crunchy cocoa nibs.",
    bestPairedWith: "espresso",
    image: chocoDream
  },
  {
    id: 3,
    type: "cupcake",
    name: "strawberry fields",
    price: "$3.75",
    ingredients: ["strawberries", "whipped cream", "vanilla cake"],
    description: "light and fruity cupcake layered with fresh strawberries and whipped cream.",
    bestPairedWith: "rosé",
    image: redVelvetBliss
  },
  {
    id: 4,
    type: "cupcake",
    name: "lemon zinger",
    price: "$3.50",
    ingredients: ["lemon zest", "lemon curd", "sugar glaze"],
    description: "zesty lemon cupcake filled with curd and topped with a sweet glaze.",
    bestPairedWith: "green tea",
    image: lemonSunshine
  },
  {
    id: 5,
    type: "cupcake",
    name: "matcha magic",
    price: "$4.25",
    ingredients: ["matcha", "white chocolate", "cream cheese frosting"],
    description: "earthy matcha meets sweet white chocolate in this frosted beauty.",
    bestPairedWith: "jasmine tea",
    image: matchaWhisper
  },
  {
    id: 6,
    type: "cupcake",
    name: "blueberry muffinette",
    price: "$3.25",
    ingredients: ["blueberries", "vanilla base", "streusel"],
    description: "like your favorite muffin, but better — with a cupcake twist and streusel top.",
    bestPairedWith: "latte",
    image: blueberryBurst
  },
  {
    id: 7,
    type: "cupcake",
    name: "salted caramel crunch",
    price: "$4.00",
    ingredients: ["caramel", "sea salt", "crunch pearls"],
    description: "salty-sweet perfection with a gooey caramel center and a crunch on top.",
    bestPairedWith: "cold brew",
    image: caramelCrunch
  },
  {
    id: 8,
    type: "cupcake",
    name: "coconut cloud",
    price: "$3.75",
    ingredients: ["coconut cream", "vanilla", "toasted coconut"],
    description: "fluffy coconut cream and toasted flakes over a vanilla cupcake base.",
    bestPairedWith: "piña colada",
    image: strawberrySwirl
  },

  // wedding cakes
  {
    id: 9,
    type: "wedding cake",
    name: "classic white",
    price: "$150",
    ingredients: ["vanilla sponge", "buttercream", "fondant"],
    description: "timeless elegance with delicate buttercream layers and smooth fondant.",
    bestPairedWith: "champagne",
    image: rusticRose
  },
  {
    id: 10,
    type: "wedding cake",
    name: "roses & cream",
    price: "$175",
    ingredients: ["rosewater", "vanilla", "silky cream"],
    description: "romantic rose-infused cake layered with silky smooth vanilla cream.",
    bestPairedWith: "sparkling rosé",
    image: classicPearl
  },
  {
    id: 11,
    type: "wedding cake",
    name: "chocolate couture",
    price: "$180",
    ingredients: ["dark chocolate", "ganache", "raspberry"],
    description: "deep chocolate layers wrapped in ganache, topped with fresh raspberries.",
    bestPairedWith: "port wine",
    image: bohoBliss
  },
  {
    id: 12,
    type: "wedding cake",
    name: "lavender dream",
    price: "$165",
    ingredients: ["lavender", "honey", "buttercream"],
    description: "whimsical cake with floral lavender notes and sweet honey layers.",
    bestPairedWith: "earl grey tea",
    image: lavenderDream
  },
  {
    id: 13,
    type: "wedding cake",
    name: "rustic berry",
    price: "$160",
    ingredients: ["mixed berries", "vanilla", "cream cheese frosting"],
    description: "semi-naked cake adorned with fresh seasonal berries and rustic charm.",
    bestPairedWith: "prosecco",
    image: berryRomance
  },
  {
    id: 14,
    type: "wedding cake",
    name: "golden fig",
    price: "$185",
    ingredients: ["fig", "honey", "almond cake"],
    description: "gold-dusted figs atop moist almond cake with a drizzle of honey.",
    bestPairedWith: "sauternes",
    image: floralFantasy
  },
  {
    id: 15,
    type: "wedding cake",
    name: "mocha marble",
    price: "$170",
    ingredients: ["coffee", "chocolate", "cream"],
    description: "swirls of mocha in every layer with a silky coffee cream finish.",
    bestPairedWith: "irish coffee",
    image: modernMarble
  },
  {
    id: 16,
    type: "wedding cake",
    name: "peach & prosecco",
    price: "$175",
    ingredients: ["peach", "prosecco glaze", "vanilla cake"],
    description: "sweet peach layers with a bubbly prosecco glaze — light and luxe.",
    bestPairedWith: "bellini",
    image: goldenElegance
  },
];

export default products;
