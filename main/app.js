let skills = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".progress span");

// to animate progress of each skill percentage
window.addEventListener("click", ()=>{
  if (window.scrollY >= skills.offsetTop - 200) {
    progress.forEach((span) => {
      span.style.width = span.dataset.set;
    });
  }
})
// stats countdown
let stats = document.querySelector(".stats");
let allNums = document.querySelectorAll(".stats .num");
let started = false;

window.addEventListener("scroll", () => { // to be modified later because not all number stop in the same rage of time
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      allNums.forEach((num) => {
        let goal = num.dataset.goal;
        let count = setInterval(() => {
          num.textContent++;
          if (num.textContent == goal) {
            clearInterval(count);
          }
        }, 2000 / goal);
      });
    }
    started = true;
  }
});

// Scroll indicator
let cricleScroll = document.querySelector(".scroll__Circle");
let cricleScrVal = document.querySelector(".value");
let allHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;
let usedHeight = allHeight - clientHeight;

window.addEventListener("scroll", () => {
  let test = document.documentElement.scrollTop;
  let scrollValue = (test / usedHeight) * 100;
  cricleScroll.style.background = `conic-gradient(#00D486 ${scrollValue}%, #eee ${scrollValue}%)`;
  cricleScrVal.textContent = `${Math.round(scrollValue)}%`;
});

window.addEventListener("scroll", () => {
  if (window.scrollY <= 500) {
    cricleScroll.style.display = "none";
  } else {
    cricleScroll.style.display = "grid";
  }
});

// countdown
const days = document.querySelector(".days")
const hours = document.querySelector(".hours")
const mins = document.querySelector(".minutes")
const secs = document.querySelector(".seconds")

let endDate = new Date("May 21 2024 22:30");
let counter = setInterval(()=>{
  dateNow = new Date();
  let diffDate = endDate - dateNow;
  let d = Math.floor(diffDate / 1000 / 60 / 60 / 24);
  // < calculate the remains from days, minutes and seconds >
  let h = ((diffDate / 1000 / 60 / 60 / 24) - d) * 24
  let m = (h - Math.floor(h)) * 60
  let s = (m - Math.floor(m)) * 60
  //set all time to all spans
  days.innerHTML = Math.floor(d)
  hours.innerHTML =  Math.floor(h)
  mins.innerHTML =  Math.floor(m) < 10 ? `0${Math.floor(m)}` : Math.floor(m)
  secs.innerHTML =  Math.floor(s) < 10 ? `0${Math.floor(s)}` : Math.floor(s)
  if (diffDate == 0) {
    clearInterval(counter);
  }
}, 1000)