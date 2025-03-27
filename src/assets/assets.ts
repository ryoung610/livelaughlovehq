import lllsunglasses from './lllsunglasses.jpg';
import orangesunglasses from './orangesunglasses.jpeg';
import blacksunglasses from './blacksunglasses.jpeg';
import logo from './blacksunglasses.jpeg';
import profile_icon from './profile_icon.jpg';
import shop_cart01 from './shop_cart01.png';
// import bitcoinimage from './bitcoinimage.jpeg'; // Uncomment if needed
// import logo from './bitcoinimage.jpeg'; // Uncomment if needed

// Define an interface for the assets object
interface Assets {
  logo: string;
  lllsunglasses: string;
  orangesunglasses: string;
  blacksunglasses: string;
  profile_icon: string;
  shop_cart01: string;
}

// Define an interface for the Product type
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  catagory: string; // Kept as "catagory" to match your original code
  subCatagory?: string; // Optional, as it’s only present in some products
}

// Export the assets object with type annotation
export const assets: Assets = {
  logo,
  lllsunglasses,
  orangesunglasses,
  blacksunglasses,
  profile_icon,
  shop_cart01,
};

// Export the products array with type annotation
export const products: Product[] = [
  {
    _id: "color",
    name: "LL&L Sunglasses",
    description: "Light-weight Sunglasses for Summer-Time views and vibes while watching your favorite podcast",
    price: 29.99,
    image: [lllsunglasses],
    catagory: "uni-sex",
  },
  {
    _id: "bluetoothe",
    name: "Black Blue-tooth Sunglasses",
    description: "Black Sunglasses bluetooth enabled for Summer-Time sounds, views, and vibes while watching your favorite podcast",
    price: 49.99,
    image: [blacksunglasses],
    catagory: "uni-sex",
    subCatagory: "bluetooth sound enabled",
  },
  {
    _id: "donation",
    name: "Orange Sunglasses",
    description: "Orange Sunglasses for Summer-Time views and vibes while watching your favorite podcast",
    price: 99.99,
    image: [orangesunglasses],
    catagory: "uni-sex",
  },
];