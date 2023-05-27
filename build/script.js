"use strict";

const toggleOff = document.querySelector(".toggle-off");
const toggleOn = document.querySelector(".toggle-on");
const monthly = document.querySelector(".monthly");
const annually = document.querySelector(".annually");

toggleOff.addEventListener("click", function () {
  toggleOn.classList.toggle("hidden");
  toggleOff.classList.toggle("hidden");
  annually.classList.toggle("hidden");
  monthly.classList.toggle("hidden");
});

toggleOn.addEventListener("click", function () {
  toggleOff.classList.toggle("hidden");
  toggleOn.classList.toggle("hidden");
  monthly.classList.toggle("hidden");
  annually.classList.toggle("hidden");
});

