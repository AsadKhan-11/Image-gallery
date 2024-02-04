let cur = document.getElementById("current");
let gal = document.querySelectorAll("#gallery img");

gal[0].style.opacity = 0.4;

gal.forEach((img) => img.addEventListener("click", onclick));
function onclick(e) {
  gal.forEach((img) => (img.style.opacity = 1));

  cur.src = e.target.src;

  e.target.style.opacity = 0.4;
}
