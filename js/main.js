// даний код працює в строгому режимі
"use strict";

// Button Top

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("myBtnUp").style.display = "block";
  } else {
    document.getElementById("myBtnUp").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Progressbar

let fullHeight, innerHeight;
const progressBar = document.querySelector(".progressbar>.progressbar-line");

window.addEventListener("scroll", fillProgressLine);
window.addEventListener("resize", fillProgressLine);

function fillProgressLine() {
  fullHeight = document.body.scrollHeight;
  innerHeight = window.innerHeight;
  progressBar.style.width =
    (pageYOffset * 100) / (fullHeight - innerHeight) + "%";
}

fillProgressLine();

// Wheather App

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e9a3a7569cmsh5efe6d4beb50505p19bb3ejsn6dbe5402dbe9",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=Kiev", options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let location = response.location;
    let weather = response.current;

    document.getElementById(
      "city"
    ).innerText = `${location.name}, ${location.country}, ${location.tz_id}, ${location.lat}, ${location.lon}`;
    document.getElementById("time").innerText =
      location.localtime.split(" - ")[0];
    document.getElementById("temp").innerText = weather.temp_c;
    document.getElementById("condition").innerText = weather.condition.text;

    document.getElementById("wind").innerText = weather.wind_kph;
    document.getElementById("humidity").innerText = weather.humidity;
    document.getElementById("cloud").innerText = weather.cloud;
  })
  .catch((err) => console.error(err));