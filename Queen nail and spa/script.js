let navbarHeader = document.querySelector(".navbar-header");
window.addEventListener("scroll", function(event) {
  event.preventDefault();

  if (window.scrollY <= 70) {
    navbarHeader.classList.remove("scrolled");
  } else {
    navbarHeader.classList.add("scrolled");
  }
});
const navbarBtn = document.querySelector(".navbar-btn");
const navbarLinks = document.querySelector(".navbar-links-2");

navbarBtn.addEventListener("click", function() {
  let value = navbarLinks.classList.contains("navbar-hidden");
  if (value) {
    navbarLinks.classList.remove("navbar-hidden");
    navbarBtn.classList.remove("change");
    navbarLinks.style.display = "transition: all 2s ease";
    navbarLinks.style.display = "none";
  } else {
    navbarLinks.classList.add("navbar-hidden");
    navbarBtn.classList.add("change");
    navbarLinks.style.display = "transition: all 2s ease";
    navbarLinks.style.display = "block";
  }
});

// image slider automatic and clickable
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}
function slider() {
  var i;
  for (i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
  current++;
  if (current > sliderImages.length) {
    current = 1;
  }
  sliderImages[current - 1].style.display = "block";
  setTimeout(slider, 3000);
}
// Init slider
function startSlide() {
  reset();
  slider();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

// create a phone number display
function changeText() {
  document.querySelector(".call").innerHTML = "512-260-8338";
}
