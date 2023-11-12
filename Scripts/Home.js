
let itemsArr = []

let xml = new XMLHttpRequest();

xml.open("GET", "../Data/items.json", true)

xml.onload = function () {
   let response = JSON.parse(this.responseText)
   itemsArr = response.items
   console.log(itemsArr);
   showItems();
}

xml.send();

let itemsDiv = document.getElementById("ItemsDiv")

const showItems = () => {
   itemsDiv.innerHTML = ""
   for (let x in itemsArr) {
      let itemDiv = document.createElement("div")
      itemDiv.className = "item"
      itemsDiv.appendChild(itemDiv)
      itemDiv.style = `background-image: url(${itemsArr[x].itemImage});`
      itemDiv.innerHTML += 
      `<h1 class="itemName">${itemsArr[x].itemName}</h1>
      <div id="${itemsArr[x].divName}Information" class="itemsInformation">
      <p class="itemContent">
      ${itemsArr[x].itemContent}</p> 
       <p class="price">${itemsArr[x].itemPrice}$</p>
      <p><button onclick="minus_handler(${x})" class="amountBtn">-</button><input type="text" id="" value="${itemsArr[x].itemAmount}" readonly><button onclick="plus_handler(${x})" class="amountBtn">+</button></p>
      <p id="item${x}"><button class="addCartBtn" id="cartBtn${x}" onclick="Cart_Engine(${x})">Add to Cart</button>
      </p>
      </div>`
   }

}

const minus_handler = (index) => {
   if(itemsArr[index].itemAmount !=1){
      let price = itemsArr[index].itemPrice / itemsArr[index].itemAmount
      itemsArr[index].itemPrice -= price
      itemsArr[index].itemAmount -= 1
      showItems();
   }
}

const plus_handler = (index) => {
   let price = itemsArr[index].itemPrice / itemsArr[index].itemAmount
   itemsArr[index].itemPrice += price
   itemsArr[index].itemAmount += 1
   showItems();
}

let itemsArrCart = []

let cart = document.getElementById("cart")

const Cart_Engine = (index) => {
   let cartBtn = document.getElementById("item"+index)
   cartBtn.innerHTML = `<span>Added to Cart!</span`
   cartBtn.style.fontSize = "150%"
   cartBtn.style.color = "green"
   let cartNumber = document.getElementById("cartNum")
   cartNumber.innerHTML = Number(cartNumber.innerHTML) +1
   cart.style.color = "blue"

   let itemObj = {
      name: itemsArr[index].itemName,
      amount: itemsArr[index].itemAmount,
      price: itemsArr[index].itemPrice
   }
   itemsArrCart.push(itemObj)
   console.log(itemsArrCart);
}

const Cart = () => {
   localStorage.setItem("CartItems", JSON.stringify(itemsArrCart))
}

