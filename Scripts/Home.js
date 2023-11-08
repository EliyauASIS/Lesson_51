<<<<<<< HEAD
=======


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

>>>>>>> 2de7e215bc8bfc93ef460d3a925c1f41cf1f7f60
