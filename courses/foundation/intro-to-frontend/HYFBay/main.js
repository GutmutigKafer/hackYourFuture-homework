console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const list = document.querySelector(".product-list");
const renderProducts = (products) => {
  products.forEach((one) => {
    const product = document.createElement("li");
    product.innerHTML = `
    <h3 class="title">${one.name}</h3>
<h5 class="price">${one.price}</h5>
<h5 class="rating">${one.rating}/10</h5>
 `;
    list.appendChild(product);
  });
};

renderProducts(products);
