// Product array (copied from Assignment 2)
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

// Get reference to <ul id="product-list">
const productList = document.getElementById("product-list");


// ------------------
// EASY TASK
// ------------------
// Step 1: Use map to generate list of <li> strings
const liItemsEasy = products.map(product => `<li>${product.name}</li>`);
// Step 2: Add to DOM
productList.innerHTML = liItemsEasy.join("");


// ------------------
// MEDIUM TASK
// ------------------
// Step 1: Filter in-stock products
const inStockProducts = products.filter(p => p.inStock);
// Step 2: Generate detailed <li> string per product
const liItemsMedium = inStockProducts.map(product => `
    <li class="product-item">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
    </li>
`);
// Step 3: Render to DOM
productList.innerHTML = liItemsMedium.join("");


// HARD TASK
// Step 1: Clearing an previous content in unlisted producted list
productList.innerHTML = "";

// Step 2 to  step 6 in same loops finished
products.forEach(product => {
    const li = document.createElement("li");
    li.classList.add("product-item");

    const h3 = document.createElement("h3");
    h3.textContent = product.name;

    const p = document.createElement("p");
    p.textContent = `$${product.price}`;

    if (!product.inStock) {
        li.classList.add("out-of-stock");
    }

    const categoryClass = `category-${product.category.toLowerCase().replace(" ", "-")}`;
    li.classList.add(categoryClass);
    li.appendChild(h3);
    li.appendChild(p);
    productList.appendChild(li);
});

//Bonus task
// Step 1: Calculate total in-stock value
const totalValue = products
    .filter(product => product.inStock)
    .reduce((acc, product) => acc + product.price, 0);

// Step 2: Create a div to display this value
const totalDiv = document.createElement("div");
totalDiv.textContent = `Total Value of In-Stock Items: $${totalValue}`;
totalDiv.style.marginTop = "20px";
totalDiv.style.fontWeight = "bold";
totalDiv.style.fontSize = "18px";

// Step 3: Appending this  to <main> fn 
document.getElementById("app-container").appendChild(totalDiv);