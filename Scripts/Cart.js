let totalCart = 0;

let cartData = JSON.parse(localStorage.getItem("CartItems"))
console.log(cartData);
addToCart()
function addToCart() {
    for (let x in cartData) {
        let name = cartData[x].name;
        let price = cartData[x].price;
        console.log(name);
        console.log(price);
        const cart = document.getElementById("cartContainer");
        const item = document.createElement("p");
        item.innerHTML = `<a href="#">${cartData[x].name}</a> <span class="price">${cartData[x].price}$</span>`;
        cart.insertAdjacentElement("beforeend", item);
        totalCart+=price;
    }
  document.getElementById("total").innerHTML=totalCart + "$"
}


