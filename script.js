// SMOOTH SCROLLING TRIGGER
// gsap.registerPlugin(ScrollTrigger)
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// LOGO ANIMATION
// -----------------------------------------
const dataSection = document.querySelector("[data-logo-section]");
const lerp = (x, y, a) => x * (1 - a) + y * a;

dataSection.addEventListener("mousemove", (e) => {
  let dims = dataSection.getBoundingClientRect();
  let xstart = dims.x;
  let xend = dims.x + dims.width;
  var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);

  gsap.to(dataSection.children, {
    x: lerp(-40, 40, zeroone),
    duration: 0.5,
  });
});

dataSection.addEventListener("mouseout", () => {
  gsap.to(dataSection.children, {
    x: 0,
    duration: 0.5,
  });
});

// CUSTOM CURSOR
// -----------------------------------------
const customCursor = document.querySelector("[data-custom-cursor]");
window.addEventListener("mousemove", (e) => {
  gsap.to(customCursor, {
    x: e.clientX - 3,
    y: e.clientY - 3,
    duration: 0.5,
    ease: Expo,
  });
});
window.addEventListener("mouseover", (e) => {
  customCursor.style.scale = "1";
});
window.addEventListener("mouseout", (e) => {
  customCursor.style.scale = "0";
});

Shery.makeMagnet("[data-magnet]");

// CURSOR EFFECT
// ------------------------------------------------------
const AllElements = document.querySelectorAll("[data-cursor-effect]");
const dilip = document.querySelector('[data-cursor-effect="dilip"]');
const exploreHovers = document.querySelectorAll(
  '[data-cursor-effect="explore"]'
);
const socialLinks = document.querySelectorAll(
  '[data-cursor-effect="social-link"]'
);
const dilipTitle = document.querySelector(".dilip--title");
const exploreTitle = document.querySelector(".explor--title");

AllElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    gsap.to(customCursor, {
      scale: 3,
    });
  });

  element.addEventListener("mouseout", () => {
    gsap.to(customCursor, {
      scale: 1,
    });
  });
});

socialLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    gsap.to(customCursor, {
      scale: 3,
    });
  });

  link.addEventListener("mouseout", () => {
    gsap.to(customCursor, {
      scale: 1,
    });
  });
});

dilip.addEventListener("mouseover", () => {
  customCursor.classList.add("title");
  dilipTitle.classList.add("show");
  gsap.to(customCursor, {
    scale: 4,
  });
});

dilip.addEventListener("mouseout", () => {
  customCursor.classList.remove("title");
  dilipTitle.classList.remove("show");
  gsap.to(customCursor, {
    scale: 1,
  });
});

exploreHovers.forEach((explore) => {
    explore.addEventListener("mouseover", () => {
    customCursor.classList.add("title");
    exploreTitle.classList.add("show");
    gsap.to(customCursor, {
      scale: 4,
    });
  });

  explore.addEventListener("mouseout", () => {
    customCursor.classList.remove("title");
    exploreTitle.classList.remove("show");
    gsap.to(customCursor, {
      scale: 1,
    });
  });
});

// -----------------------------------------------------------
// TEXT ANIMATION HOME
// -----------------------------------------------------------
const texts = document.querySelectorAll(".txt");

setTimeout(() => {
  texts[0].style.marginTop = "0px";
}, 500);
setTimeout(() => {
  texts[1].style.marginTop = "0px";
}, 700);

Shery.hoverWithMediaCircle(".hvr", { images: ["./assets/dilip.png"] });
// Shery.imageEffect(".img", {
//   style: 4 /*OR 5 for different variant */,
//   debug: false,
//   config: {
//     uColor: { value: true },
//     uSpeed: { value: 0.39, range: [0.1, 1], rangep: [1, 10] },
//     uAmplitude: { value: 3.74, range: [0, 5] },
//     uFrequency: { value: 1.76, range: [0, 10] },
//     geoVertex: { range: [1, 64], value: 43.8 },
//     zindex: { value: -9996999, range: [-9999999, 9999999] },
//     aspect: { value: 0.7789993464495815 },
//     ignoreShapeAspect: { value: true },
//     shapePosition: { value: { x: 0, y: 0 } },
//     shapeScale: { value: { x: 0.5, y: 0.5 } },
//     shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
//     shapeRadius: { value: 0, range: [0, 2] },
//     currentScroll: { value: 0 },
//     scrollLerp: { value: 0.07 },
//     gooey: { value: false },
//     infiniteGooey: { value: false },
//     growSize: { value: 4, range: [1, 15] },
//     durationOut: { value: 1, range: [0.1, 5] },
//     durationIn: { value: 1.5, range: [0.1, 5] },
//     displaceAmount: { value: 0.5 },
//     masker: { value: true },
//     maskVal: { value: 1.12, range: [1, 5] },
//     scrollType: { value: 0 },
//     noEffectGooey: { value: true },
//     onMouse: { value: 1 },
//     noise_speed: { value: 0.2, range: [0, 10] },
//     metaball: { value: 0.2, range: [0, 2] },
//     discard_threshold: { value: 0.5, range: [0, 1] },
//     antialias_threshold: { value: 0.002, range: [0, 0.1] },
//     noise_height: { value: 0.5, range: [0, 2] },
//     noise_scale: { value: 10, range: [0, 100] },
//   },
// });

// DEVELOPER TITLE ANIMATION
// --------------------------------------------------------------
const titles = document.querySelectorAll(".title");
setTimeout(() => {
  titles[0].classList.add("fadetitle");
}, 800);
setTimeout(() => {
  titles[1].classList.add("fadetitle");
}, 950);
setTimeout(() => {
  titles[2].classList.add("fadetitle");
}, 1100);

// --------------------------------------------------------------
// HEADIG ANIMATION
// --------------------------------------------------------------
const headings = document.querySelectorAll("[data-heading-section]");
headings.forEach((heading) => {
  heading.addEventListener("mousemove", (e) => {
    let dims = heading.getBoundingClientRect();
    let xstart = dims.x;
    let xend = dims.x + dims.width;
    var zeroone = gsap.utils.mapRange(xstart, xend, 0, 1, e.clientX);

    gsap.to(heading, {
      x: lerp(-30, 30, zeroone),
      duration: 0.5,
    });
  });

  heading.addEventListener("mouseout", () => {
    gsap.to(heading, {
      x: 0,
      duration: 0.5,
    });
  });
});



// CIRCLE NAME ANIMATION OPENING
const circleName = document.querySelector('[data-circle-name]')
const circle = document.querySelector('[data-circle]')

setTimeout(() => {
  circleName.style.scale = "1";
}, 600);

setTimeout(() => {
  circle.style.transform = "translate(-50%, -50%) scale(1)";
}, 500);



// NAVBAR ANIMATION
const logo = document.querySelector('[data-logo]');
setTimeout(() => {
  logo.style.transform = "translateY(0px)"
}, 1000);

const navLinks = document.querySelectorAll('[data-link]');
setTimeout(() => {
  navLinks[0].style.transform = "translateY(0px)"
}, 1200);
setTimeout(() => {
  navLinks[1].style.transform = "translateY(0px)"
}, 1300);
setTimeout(() => {
  navLinks[2].style.transform = "translateY(0px)"
}, 1400);
setTimeout(() => {
  navLinks[3].style.transform = "translateY(0px)"
}, 1500);


// TOP BUTTON ANIMATION
const topBtn = document.querySelector('[data-top]');
window.addEventListener("scroll", (e)=>{
  if (scrollY > 400) {
    topBtn.style.transform = "translateX(0px)";
  } else {
    topBtn.style.transform = "translateX(100px)";
  }
})



// REVEAL EFFECT ON SCROLL

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
    for (let i = 0; i < revealElements.length; i++) {
        const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1;

        if (elementIsInScreen) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
};

window.addEventListener("scroll", scrollReveal);



// ------------------------------------------
// TOGGLER MENU
// ------------------------------------------
const togglerMenu = document.querySelectorAll('[data-toggler]');
const navList = document.querySelector('[data-navList]');
const overlayer = document.querySelector('[data-overlay]')

for (let i = 0; i < togglerMenu.length; i++) {
  togglerMenu[i].addEventListener("click", ()=> {
    togglerMenu[1].classList.toggle("active");
    navList.classList.toggle('show');
    overlayer.classList.toggle('show');
  })  
}
