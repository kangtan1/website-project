let time = document.querySelector(".time");
let dateTime = document.querySelector(".session"),
  name = document.querySelector(".name"),
  focus = document.querySelector(".focus");
let pm = "Pm";
// Options
const showAmPm = true;

//addzero function
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function showTime() {
  let dt = new Date();
  let hr = addZero(dt.getHours());
  let min = addZero(dt.getMinutes());
  let sec = addZero(dt.getSeconds());
  if (hr > 12) {
    time.innerHTML = "pm";
    hr = hr - 12;
  }
  if (hr == 0) {
    hr = 12;
    time.innerHTML = "am";
  }
  // Set AM or PM
  const amPm = hr >= 12 ? "PM" : "AM";
  //output time
  //   h.innerHTML = hr;
  //   m.innerHTML = min;
  //   s.innerHTML = sec;
  time.innerHTML = `${hr}<span>:</span>${min}<span>:</span>${sec} ${pm}`;
  setTimeout(showTime, 500);
}
// set background and greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    //     morning
    document.body.style.backgroundImage =
      "url('https://wallpapersite.com/images/wallpapers/sunrise-4000x2667-lake-morning-4k-4102.jpg')";
    greeting.textContent = "good Morning";
    document.body.style.color = "white";

    //     afternoon
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "url('https://wallpaperaccess.com/full/31213.jpg')";
    greeting.textContent = "good Afternoon";
    //     night
  } else {
    document.body.style.backgroundImage =
      "url('https://www.pixel4k.com/wp-content/uploads/2018/12/milky-way-starry-sky-night-4k_1546278925.jpg')";
    greeting.textContent = "good Night";
    document.body.style.color = "white";
  }
}
// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
