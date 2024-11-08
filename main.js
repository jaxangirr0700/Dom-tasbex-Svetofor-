//
//
//

// setInterval(() => {
//   let img = document.querySelector("img");
//   console.log(img.getAttribute("srs"));
//   img.setAttribute(
//     "srs",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIb24hBK2IAEge3HjsYjmH36OVm3cTVi9cKg&s"
//   );
// }, 200);

//
//
//
//
//
/////////////////////////////// EVENTS ////////////////////////////
//
// let itemTasbeh = document.querySelector(".item-tasbex");
// let tasbehImg = document.querySelector(".t-img");
// let buttons = document.querySelector(".buttons");
let counter = 0;
let reset = document.querySelector(".reset");
let plus = document.querySelector(".plus");
let led = document.querySelector(".led");

plus.addEventListener("click", () => {
  counter++;
  document.querySelector(".num").textContent = counter;
});
reset.addEventListener("click", () => {
  counter -= counter;
  document.querySelector(".num").textContent = counter;
});
led.addEventListener("click", () => {
  document.querySelector(".num").classList.toggle("dark");
});

//////////////////////////////TASBEH////////////////////////////////////////////////////////
//

//
//
//
//
//
//
//////////////////////////////////SVETOFOR ////////////////////////////////
//
function changeLight() {
  document.querySelector("#red").classList.remove("red");
  document.querySelector("#yellow").classList.remove("yellow");
  document.querySelector("#green").classList.remove("green");

  setTimeout(() => {
    document.querySelector("#red").classList.add("red");
  }, 0);
  setTimeout(() => {
    document.querySelector("#red").classList.remove("red");
    document.querySelector("#yellow").classList.add("yellow");
  }, 2000);
  setTimeout(() => {
    document.querySelector("#yellow").classList.remove("yellow");
    document.querySelector("#green").classList.add("green");
  }, 5000);
  setTimeout(() => {
    document.querySelector("#green").classList.remove("green");
  }, 8000);
}
setInterval(changeLight, 8000);
