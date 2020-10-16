window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
  document.body.style.setProperty('--scroll',scroll);
  console.log("scroll: "+scroll)
}, false);
let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector("#countdown").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#countdown").innerHTML = "Ya Estreno";
  }
}, 1000);
