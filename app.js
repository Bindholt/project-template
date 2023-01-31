console.log("app.js is running 🎉");

function sayHello() {
  document.querySelector("h3").textContent =
    "Hej " + document.querySelector("input").value;
}

document.querySelector("button").addEventListener("click", sayHello);
document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sayHello();
  }
});
