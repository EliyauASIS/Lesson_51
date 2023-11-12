let totalCart = 0;

let cartData = JSON.parse(localStorage.getItem("CartItems"))
console.log(cartData);
addToCart()
function addToCart() {
    for (let x in cartData) {
        let name = cartData[x].name;
        let price = cartData[x].price;
        let amount = cartData[x].amount;
        console.log(name);
        console.log(price);
        const iconHTML = '<i class="fa-solid fa-trash fa-2xl"></i>';
        const cart = document.getElementById("cartContainer");
        const item = document.createElement("p");
        item.innerHTML = `<button id="trash" onclick="deleteItem(${x})">${iconHTML}</button> <a href="#">${cartData[x].name}</a> <a href="#">${cartData[x].amount}</a> <span class="price">${cartData[x].price}$</span> `;
        cart.insertAdjacentElement("beforeend", item);
        totalCart += price;
    }
    document.getElementById("total").innerHTML = totalCart + "$"
}

function deleteItem(index) {
    const userConfirmed = window.confirm("Are you sure you want to delete this item?");
    if (userConfirmed) {
        cartData.splice(index, 1);
        localStorage.setItem("CartItems", JSON.stringify(cartData));
        location.reload();
    }
}
