let monthNavigation = 0;
let tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const calendar = document.querySelector(".organiser__dates");
const monthYear = document.getElementById("month-year");
const btnPrevious = document.querySelector(".month__button--previous");
const btnNext = document.querySelector(".month__button--next");

const weekdaysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const state = {
  day: null,
  date: null,
  month: null,
  year: null,
};

const getDate = function () {
  const currentDate = new Date();

  state.day = currentDate.getDay();
  state.date = currentDate.getDate();
  state.month = currentDate.getMonth();
  state.year = currentDate.getFullYear();
};

const previous = function () {
  state.month = state.month === 0 ? 11 : state.month - 1;
  state.year = state.month === 0 ? state.year - 1 : state.year;
};

const next = function () {
  state.month = (state.month + 1) % 12;
  state.year = state.month === 11 ? state.year + 1 : state.year;
};

const renderMonthYear = function () {
  monthYear.textContent = `${monthsArray[state.month]} ${state.year}`;
};

btnPrevious.addEventListener("click", function () {
  monthNavigation--;
  previous();
  renderMonthYear();
  console.log(state);
});

btnNext.addEventListener("click", function () {
  monthNavigation++;
  next();
  renderMonthYear();
  console.log(state);
});

getDate();
renderMonthYear();
console.log(state);
