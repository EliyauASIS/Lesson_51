
let getData = localStorage.getItem("newUser");
console.log(getData);

let user1 = JSON.parse(getData);

function login_user() {
    let uname = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (!uname || !password) {
        alert("Please insert data!");
    } else {
        if (uname === user1.username && password === user1.password) {
            alert(`Hi ${user1.firstname} ${user1.lastname} from ${user1.city}! Welcome back!`);
            window.location.href = "../Pages/Home.html";
        } else {
            alert("The form was not filled out correctly. Please try again.");
        }
    }
}

document.getElementById("lgbtn").addEventListener("click", login_user);

