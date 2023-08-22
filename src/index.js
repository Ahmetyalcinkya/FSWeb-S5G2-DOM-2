import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

// MOUSEOVER
const nav = document.querySelectorAll("nav .nav-link");

nav.forEach((a) => {
  a.addEventListener("mouseover", (e) => {
    a.style.backgroundColor = "blue";
  });
});

//CLICK - IMG
const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("click", (e) => (img.style.filter = "grayscale(100%)"));
});

// DRAG / DROP
const h2 = document.querySelectorAll(".text-content h2")[0];
const p = document.querySelectorAll(".text-content p")[0];

h2.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text");
});

p.addEventListener("dragover", (e) => e.preventDefault());

p.addEventListener("drop", (e) => {
  const veri = e.dataTransfer.getData("text");
  p.textContent = veri;
});

//! BLUR
const win = window;
win.addEventListener("blur", (e) => {
  win.style.backgroundColor = "gray"; //? Blur window'da çalışır.
});

// COPY
const copyP = document.querySelectorAll(".content-destination p")[0];

copyP.addEventListener("copy", (e) => {
  e.preventDefault();
});

// WHEEL

let scale = 1;

function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(0.125, scale), 4);
  foot.style.transform = `scale(${scale})`;
}
const foot = document.querySelector("footer");

foot.onwheel = zoom;

foot.addEventListener("wheel", zoom, { passive: false });

// DBLCLICK
const button = document.querySelectorAll(".btn")[0];

button.addEventListener("dblclick", (e) => {
  button.textContent = "Lütfen çift tıklama.";
});

//! KEYDOWN
const button2 = document.querySelectorAll(".btn")[1];

button2.addEventListener("keydown", (e) => {
  e.preventDefault();
  const basilanTus = e.key;
  button2.textContent = "Basılan tuş :" + basilanTus;
});

// CLICK - H2
const header2 = document.querySelectorAll(".text-content h2")[0];
header2.addEventListener("click", (e) => {
  header2.style.fontSize = "5rem";
  header2.style.backgroundColor = "lightgray";
});

//MOUSEOUT
const paragraph = document.querySelectorAll(".text-content:nth-child(2) p")[0];

paragraph.addEventListener("mouseleave", (e) => {
  e.target.style.color = "purple";
});

//POINTEROVER
const paragraph2 = document.querySelectorAll(".text-content:nth-child(2) p")[1];

paragraph2.addEventListener("pointerover", (e) => {
  console.log("Pointer moved in");
});
