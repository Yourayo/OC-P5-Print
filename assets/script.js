// Tableaux (Array)

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

/* Mes variables */
let index = 0;

// Event Listeners
const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  banner();
});

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  banner();
});

/* Bullets Points */
const dots_container = document.querySelector(".dots");
const dots = [];
slides.forEach((slide, indexDot) => {
  const dot = document.createElement("a");
  dot.classList.add("dot");
  if (indexDot === 0) {
    dot.classList.add("dot_selected");
  }

  dot.href = "#";

  dots.push(dot);

  dots_container.appendChild(dot);
  dot.addEventListener("click", (event) => {
    event.preventDefault();
    index = indexDot;
    banner();
  });
});

/* Banner */
function banner() {
  const banner_Img = document.querySelector(".banner-img");
  const banner_Txt = document.querySelector("#banner p");
  banner_Img.src = `./assets/images/slideshow/${slides[index].image}`;
  banner_Txt.innerHTML = slides[index].tagLine;
  updateDots();
}

/* Mise à jour des Dots */
function updateDots() {
  const dots = document.querySelectorAll(".dots .dot");
  dots.forEach((dot, indexDot) => {
    if (indexDot === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
