console.log("app.js is running 🎉");

function sayHello() {
  let h3 = document.querySelector("h3");
  let inputName = document.querySelector("#name").value;
  let inputAge = document.querySelector("#age").value;
  let inputEmail = document.querySelector("#email").value;

  h3.textContent = "";

  inputName ? (h3.textContent += "Hej " + inputName + ".") : "";

  inputAge ? (h3.textContent += " Din alder er " + inputAge + ".") : "";

  inputEmail ? (h3.textContent += " Din E-mail er " + inputEmail + ".") : "";
}

document.querySelector("button").addEventListener("click", sayHello);
document.querySelector("#name").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sayHello();
  }
});
document.querySelector("#age").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sayHello();
  }
});
document.querySelector("#email").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    sayHello();
  }
});
