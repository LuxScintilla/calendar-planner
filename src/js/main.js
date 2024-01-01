"use strict";

import * as modal from "./modal.js";

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
let originalDate = new Date().getDate();

export let clickedDate;

export let tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const state = {};

// Gets all the data for the date you are working with
const getDate = function () {
  state.day = currentDate.getDay();
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

const addCurrentMarkup = function (i) {
  if (i === originalDate + state.paddingDays) {
    return `--current`;
  } else {
    return "";
  }
};

const renderTaskTitle = function (i) {
  if (tasks.taskDate === i) {
    return `tasks.taskTitle`;
  } else {
    return "";
  }
};

const renderDates = function () {
  let markup = "";
  for (let i = 1; i <= state.paddingDays + state.daysInMonth; i++) {
    if (i > state.paddingDays) {
      markup += `
      <div class="tasks">
          <div class="tasks__date${addCurrentMarkup(i)}"><span>${
        i - state.paddingDays
      }</span></div>
          <div class="tasks__divider">
            <button class="tasks__btn" data-date="${
              i - state.paddingDays
            }"><i class="fa-solid fa-plus"></i></button>
          </div>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-1-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-1" data-task="task-1-${
            i - state.paddingDays
          }">${renderTaskTitle(i)}</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-2-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-2" data-task="task-2-${
            i - state.paddingDays
          }"></label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-3-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-3" data-task="task-3-${
            i - state.paddingDays
          }"></label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-4-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-4" data-task="task-4-${
            i - state.paddingDays
          }"></label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-5-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-5" data-task="task-5-${
            i - state.paddingDays
          }"></label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-6-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-6" data-task="task-6-${
            i - state.paddingDays
          }"></label>
        </div>
      `;
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
  }).format(currentDate)} ${currentDate.getFullYear()}`;
};

const executeOrder = function () {
  renderMonthYear();
  getDate();
  renderDates();
  attachDateHandler();
  attachCheckBoxHandler();
  console.log(state);
};

// Buttons for going through the months
btnPrevious.addEventListener("click", function () {
  if (currentDate.getMonth() === 0) {
    currentDate = new Date(state.year - 1, 11);
  } else {
    currentDate = new Date(state.year, state.month - 1);
  }
  executeOrder();
});

btnNext.addEventListener("click", function () {
  if (currentDate.getMonth() === 11) {
    currentDate = new Date(state.year + 1, 0);
  } else {
    currentDate = new Date(state.year, state.month + 1);
  }
  executeOrder();
});

// Add eventlisteners to all the "add task" buttons on all the dates
// Also collects the dataset for the date of the clicked button
const attachDateHandler = function () {
  const addTaskBtns = document.querySelectorAll(".tasks__btn");
  addTaskBtns.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      clickedDate = event.target.closest(".tasks__btn").dataset.date;
      modal.openAddTask();
    })
  );
};

// Listen to and get info from the checkboxes clicked
const attachCheckBoxHandler = function () {
  const checkBox = document.querySelectorAll('input[type="checkbox"]');
  const taskLabel = document.querySelectorAll(".tasks__todo");

  checkBox.forEach((box) =>
    box.addEventListener("change", function () {
      if (this.checked) {
        taskLabel.forEach((label) => {
          if (label.dataset.task === this.id) {
            label.style.opacity = 0.3;
          }
        });
      } else {
        taskLabel.forEach((label) => {
          if (label.dataset.task === this.id) {
            label.style.opacity = 1;
          }
        });
      }
    })
  );
};

getDate();
renderMonthYear();
renderDates();
attachDateHandler();
attachCheckBoxHandler();
console.log(state);
console.log(tasks);
