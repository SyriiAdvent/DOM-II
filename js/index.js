// variables
const headers = document.querySelectorAll("h2");
const imgs = document.querySelectorAll(".img-content");

// stuff


// call functions
onLoadAnimation();
hoverHeaders();
// onkeyPress();

// Functions
function onLoadAnimation() {
  const allImgs = document.querySelectorAll("img");
  allImgs.forEach(ele => {
    return (ele.style.zIndex = "-999");
  });

  gsap.from(".main-navigation", { opacity: 0, duration: 1, y: -75 });
  gsap.from("img", { opacity: 0, duration: 1, y: -55, ease: "elastic" });
  gsap.from("h2", { opacity: 0, delay: 0.2, duration: 1, x: -55 });
  gsap.from("p", { opacity: 0, delay: 0.5, duration: 1, x: 55 });
}

function hoverHeaders() {
  headers.forEach(ele => {
    ele.addEventListener("mouseover", event => {
      event.target.style.color = "red";
    });
  });
}

// TESTING AREA

function testkey() {
  const img1 = document.querySelector("body");
  img1.addEventListener("keydown", function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      alert("WORKED!!");
    }
  });
}
testkey();

function onkeyPress() {
  imgs.forEach(ele => {
    ele.addEventListener("keydown", event => {
      if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event.keyCode);
        gsap.to(".img-content", { rotate: 360, duration: 1 });
      }
    });
  });
}
