const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

// 1.Easy
//1.new array created that contains only the products that are in stock only 
const inStockProducts = products.filter(p => p.inStock);
console.log("In Stock:", inStockProducts);

//2.new array created that contains only the products in the books cat 
const bookProducts = products.filter(p => p.category === "Books");
console.log("Books:", bookProducts);


// Medium
// 1. Created a new array that contains only the products in the Electronics category.
const productNames = products.map(p => p.name);
console.log("Product Names:", productNames);

//2. Created a new array of string  formatted as "prsoductname - $price".
const formattedProducts = products.map(p => `${p.name} - $${p.price}`);
console.log("Formatted:", formattedProducts);

// Hard

//1. calculating the total price of the products 
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("Total Price:", totalPrice);


//2.used filter and map methods , and created new array contains all the electronics products
const inStockElectronicsNames = products
  .filter(p => p.inStock && p.category === "Electronics")
  .map(p => p.name);
console.log("In Stock Electronics:", inStockElectronicsNames);
