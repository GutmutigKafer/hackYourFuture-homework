console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const list = document.querySelector(".product-list");
const renderProducts = (products) => {
  products.forEach((one) => {
    const product = document.createElement("li");
    product.className = ".product-list-item";
    product.innerHTML = `
    <h2 class="title">${one.name}</h2>
<h3 class="price">${one.price}</h3>
<h3 class="rating">${one.rating}/10</h3>
 `;
    list.appendChild(product);
  });
};

renderProducts(products);
