const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submitBtn = document.querySelector(".submitBtn");
const error = document.querySelector(".error");

const users = JSON.parse(localStorage.getItem("users")) 

console.log(users);


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const isUser = !!users.find(item => item.email === email.value)

  if (email.value !== "" && password.value !== "") {
    if (isUser) {
      localStorage.setItem("isAuth", "true")
      window.open("../index.html" , "_self")
    }else {
      error.innerHTML  = "Данный пользователь не найден!"
    }
    
  }else{
    error.innerHTML = "Все поля обьязтельны к заплнению!";
  }
})


window/addEventListener("load" , () => {
  if (localStorage.getItem("isAuth" ) === "true") {
    window.open("../index.html" , "_self")
  }
})