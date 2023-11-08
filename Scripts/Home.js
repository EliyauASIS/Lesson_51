

let itemsArr = []

const Cart_Engine = (Name, Price) => {
       let itemObj = {
        name: Name,
        price: Price
       }
       itemsArr.push(itemObj)
       console.log(itemsArr);
}

const Cart = () => {
   localStorage.setItem("CartItems",JSON.stringify(itemsArr))
}

