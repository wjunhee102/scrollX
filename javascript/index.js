const wrap = document.querySelector(".wrap");
const container = wrap.querySelector(".container");
const box = container.querySelector(".box");

let x = 0;

function scrollXMove(e) {
  console.log(e.deltaY);
  x += e.deltaY;
  if(x < 0) {
    x = 0
  } else if(x > 10000) {
    x = 10000
  }
  container.style.transform = `translateX(${-x}px)`
}

window.addEventListener("wheel", scrollXMove)