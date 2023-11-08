const toys = [
    { name: 'toy 1', price: 15 },
    { name: 'toy 2', price: 5 },
    { name: 'toy 3', price: 8 },
    { name: 'toy 4', price: 2 }
];


localStorage.setItem('cart', JSON.stringify(toys));




let cartData = localStorage.getItem()


const cart = document.getElementById("cartContainer");
const item = document.createElement("p");
item.innerHTML = `<a href="#">${product.name}</a> <span class="price">$${product.price}</span>`;
cart.insertAdjacentElement("beforeend",item);
