window.addEventListener("click", () => {
  if (localStorage.getItem("isBasket") === "true") {
    window.open("../index.html", "_self");
  }
});


