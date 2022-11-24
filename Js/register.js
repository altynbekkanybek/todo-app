const email = document.querySelector(".email");
const password = document.querySelector(".password");
const submitBtn = document.querySelector(".submitBtn");
const error = document.querySelector(".error");

window.addEventListener("load", () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
  }
});

const users = JSON.parse(localStorage.getItem("users"));

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const isUser = !!users.find((item) => item.email === email.value);

  if (email.value !== "" && password.value !== "") {
    if (isUser) {
      error.innerHTML = "Пользователь таким email уже существует!";
    } else {
      const allUsers = JSON.parse(localStorage.getItem("users"));

      localStorage.setItem(
        "users",
        JSON.stringify([
          ...allUsers,
          { email: email.value, password: password.value },
        ])
      );

   

      window.open("../auth.html", "_self")
    }

    email.value = "";
    password.value = "";
  } else {
    error.innerHTML = "Все поля обьязтельны к заплнению!";
  }
});


window.addEventListener("load", () => {
  if(localStorage.getItem("isAuth") === "true") {
    window.open("../index.html", "_self")
  }
})