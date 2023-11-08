


let spinner = document.getElementById("spinner");
    class User {
    constructor (firstname, lastname, age, username, city, email, password){
       this.firstname = firstname,
       this.lastname = lastname,
       this.age = age,
       this.username = username,
       this.city = city,
       this.email = email,
       this.password = password
    }

}
const register_handler = () => {

    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let age = document.getElementById("age");
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let city = document.getElementById("city");
    let password = document.getElementById("password");
    if (firstname.value == "" || lastname.value == "" ||age.value == "" || username.value == "" || city.value == "" ||email.value == "" ||password.value == "") {
        alert("Missing data!")
    } else {
        
        spinner.style.display = 'block';
            let newUser = new User(firstname.value, lastname.value, age.value, username.value, city.value, email.value, password.value)
            localStorage.setItem("newUser", JSON.stringify(newUser));

                        setTimeout(()=>{
                window.location.href = "./login.html"
                spinner.style.display = "none";

            },2000  )
        };

    }





    document.getElementById("regBtn").addEventListener("click", register_handler);
