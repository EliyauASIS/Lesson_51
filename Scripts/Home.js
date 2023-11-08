<<<<<<< HEAD
=======

>>>>>>> 75e8a020711a0acc030462c765b7038808183e20


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
<<<<<<< HEAD

=======
>>>>>>> 75e8a020711a0acc030462c765b7038808183e20
