"use strict";

const calendar = document.querySelector(".organiser__dates");
const monthYear = document.getElementById("month-year");
const btnPrevious = document.querySelector(".month__button--previous");
const btnNext = document.querySelector(".month__button--next");

const weekdaysArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let currentDate = new Date();

const state = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [],
};

// Gets all the data for the date you are working with
const getDate = function () {
  state.day = currentDate.getDay();
  state.date = currentDate.getDate();
  state.month = currentDate.getMonth();
  state.year = currentDate.getFullYear();
  state.daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
  state.firstDayOfMonth = new Date(state.year, state.month, 1);
  state.dateString = state.firstDayOfMonth.toLocaleDateString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  state.paddingDays = weekdaysArray.indexOf(state.dateString.split(", ")[0]);
};

const renderDates = function () {
  let markup = "";
  for (let i = 1; i <= state.paddingDays + state.daysInMonth; i++) {
    if (i > state.paddingDays) {
      markup += `
      <div class="tasks">
          <div class="tasks__date"><span>${i - state.paddingDays}</span></div>
          <div class="tasks__divider">
            <button class="tasks__btn"><i class="fa-solid fa-plus"></i></button>
          </div>
          <label class="tasks__checkbox">
            <input type="checkbox" name="checkbox">
          </label>
          <div class="tasks__todo"></div>
          <label class="tasks__checkbox">
            <input type="checkbox" name="checkbox">
          </label>
          <div class="tasks__todo"></div>
          <label class="tasks__checkbox">
            <input type="checkbox" name="checkbox">
          </label>
          <div class="tasks__todo"></div>
          <label class="tasks__checkbox">
            <input type="checkbox" name="checkbox">
          </label>
          <div class="tasks__todo"></div>
          <label class="tasks__checkbox">
            <input type="checkbox" name="checkbox">
          </label>
          <div class="tasks__todo"></div>
          <label class="tasks__checkbox">
            <input type="checkbox" name="checkbox">
          </label>
          <div class="tasks__todo"></div>
        </div>
      `;
      document
        .querySelector(".tasks__btn")
        .addEventListener("click", () => console.log("click"));
    } else {
      markup += `
      <div class="padding"></div>
      `;
    }
  }
  // Clear and insert html markup into the calendar
  calendar.innerHTML = "";
  calendar.insertAdjacentHTML("afterbegin", markup);
};

// Shows and updates the current month and year
const renderMonthYear = function () {
  monthYear.textContent = `${new Intl.DateTimeFormat("en-UK", {
    month: "long",
  }).format(currentDate)} ${state.year}`;
};

// Buttons for going through the months
btnPrevious.addEventListener("click", function () {
  renderMonthYear();
  getDate();
  renderDates();
  console.log(state);
});

btnNext.addEventListener("click", function () {
  renderMonthYear();
  getDate();
  renderDates();
  console.log(state);
});

getDate();
renderMonthYear();
renderDates();
console.log(state);
