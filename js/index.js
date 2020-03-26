// variables
const headers = document.querySelectorAll("h2");
const imgs = document.querySelectorAll(".img-content > img");
const body = document.querySelector("body");
const pContents = document.querySelectorAll("p");
const contentGroup = document.querySelector(".content-section");
const textContent = document.querySelector(".text-content");
const links = document.querySelectorAll('nav a')

// stuff


// call functions
onLoadAnimation();
hoverHeaders();
rotateKey();
randomColor();
hoverAnimate();
windowResize();

// Propagate & stopDefault
propagateExample();
noLoad();

// Functions
function noLoad() {
  links.forEach(ele => {
    addEventListener("click", event => {
      event.preventDefault();
    });
  })
}

function windowResize() {
  window.addEventListener('resize', event => {
    imgs[0].src = 'https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';

    imgs[1].src = 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
  })
}

function hoverAnimate() {
  imgs.forEach(ele => {
  ele.addEventListener('mouseenter', event => {
      ele.style.transform = 'scale(1.2)';
      ele.style.transition = 'transform 1s';
    })

    ele.addEventListener('mouseleave', event => {
      ele.style.transform = 'scale(1.0)';
      ele.style.transition = 'transform 1s';
    })
  })
}

function propagateExample() {
  body.addEventListener('dblclick', () => {
    body.style.backgroundColor="papayawhip";
    console.log("Me last!")
  })
  
  
  textContent.addEventListener('dblclick', (event) => {
    textContent.style.backgroundColor = "rebeccapurple";
    console.log("me second!");
    
  })
  
  textContent.addEventListener('dblclick', (event) => {
    textContent.style.backgroundColor="pink";
    event.stopPropagation();
  })
}

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

function rotateKey() {
  body.addEventListener("keydown", event => {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      gsap.to(".img-content", { rotate: 360, duration: 1});
    }
  });
}

function randomColor() {
  const random = Math.floor(Math.random() * 10);
  body.addEventListener('wheel', event => {
    if(random <= 1) {
      pContents.forEach(ele => {
        ele.style.color = 'orange';
      })
      console.log(`All paragraphs are now orange`);
    } else if (random <= 3 && random >= 2) {
      pContents.forEach(ele => {
        ele.style.color = 'blue';
      })
      console.log(`All paragraphs are now blue`);
    } else if (random <= 5 && random >= 4) {
      pContents.forEach(ele => {
        ele.style.color = 'pink';
      })
      console.log(`All paragraphs are now pink`);
    } else if (random <= 7 && random >= 6) {
      pContents.forEach(ele => {
        ele.style.color = 'purple';
      })
      console.log(`All paragraphs are now purple`);
    } else if (random <= 9 && random >= 8) {
      pContents.forEach(ele => {
        ele.style.color = 'black';
      })
      console.log(`All paragraphs are now black, no random for you!`);
    } else {
      pContents.forEach(ele => {
        ele.style.color = 'white';
      })
      console.log(`All paragraphs are now white, your quite unlucky! Reload page!`);
    }
  })
}
