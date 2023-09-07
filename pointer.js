"use strict";

// procentregning: delen/detHele * 100
const body = document.querySelector("body");

document.addEventListener("mousemove", (e) => {
  let x = e.screenX;
  let y = e.screenY;
  const l = (x / window.innerWidth) * 100;
  const h = (y / window.innerHeight) * 100;
  body.style.backgroundColor = `hsl(260, ${l}%, ${h}%)`;
  console.log(x, y);
});
