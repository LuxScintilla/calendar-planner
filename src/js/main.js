"use strict";

import * as modal from "./modal.js";

const calendar = document.querySelector(".organiser__dates");
const monthYear = document.getElementById("month-year");
const btnPrevious = document.querySelector(".month__button--previous");
const btnNext = document.querySelector(".month__button--next");

const avatarEl = document.querySelector(".profile__avatar");
const usernameEl = document.querySelector(".profile__username");
const locationEl = document.querySelector(".profile__location");

const profileWeatherDiv = document.querySelector(".profile__weather");
const profileWeatherImg = document.querySelector(".profile__weather-img");
const profileWeatherText = document.querySelector(".profile__weather-text");

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

export let profile = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : [];

export const state = {};

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

// Adds a class modifier depending on what date it is currently
const addCurrentMarkup = function (i) {
  if (i === originalDate && state.month === new Date().getMonth()) {
    return `--current`;
  } else {
    return "";
  }
};

// Returns the html markup needed for rendering the appropriate task titles
const renderTaskTitle = function (i, line) {
  const filtered = tasks.filter((task) => {
    return task.taskDate === i && state.month === task.taskMonth;
  });

  if (filtered[line] && filtered[line].taskMonth === state.month) {
    return `${filtered[line].taskTitle}`;
  } else {
    return "";
  }
};

// Renders the add task button at the top of the dates, unless date has passed
const renderAddTaskBtn = function (i) {
  if (i < originalDate) {
    return "";
  } else {
    return `<button class="tasks__btn tasks__btn--add" aria-label="button to add task for this date" data-date="${i}"><i class="fa-solid fa-plus"></i></button>`;
  }
};

// Renders the edit button at the top of the dates, unless there are no tasks for that date
const renderEditTaskBtn = function (i) {
  if (tasks.some((task) => task.taskDate === i)) {
    return `<button class="tasks__btn tasks__btn--edit" aria-label="button to edit existing tasks for this date" data-date="${i}"><i class="fa-solid fa-pen-to-square"></i></button>`;
  } else {
    return "";
  }
};

// Renders the delete button at the top of the dates, unless there are no tasks for that date
const renderDeleteTaskBtn = function (i) {
  if (tasks.some((task) => task.taskDate === i)) {
    return `<button class="tasks__btn tasks__btn--delete" aria-label="button to delete some tasks for this date" data-date="${i}"><i class="fa-solid fa-trash"></i></button>`;
  } else {
    return "";
  }
};

// Renders the weather button at the top of every date, which will get the weather info from API and display it
const renderWeatherBtn = function (i) {
  if (i === originalDate) {
    return `<button class="tasks__btn tasks__btn--weather" aria-label="button to see current weather for this date" data-date="${i}"><i class="fa-solid fa-cloud-sun"></i></button>`;
  } else {
    return "";
  }
};

// Generates all the html markup for all the dates of the month
const renderDates = function () {
  // Collects all the markup when finished
  let markup = "";
  for (let i = 1; i <= state.paddingDays + state.daysInMonth; i++) {
    if (i > state.paddingDays) {
      markup += `
      <div class="tasks">
          <div class="tasks__date${addCurrentMarkup(
            i - state.paddingDays
          )}"><span>${i - state.paddingDays}</span></div>
          <div class="tasks__divider">
            ${renderWeatherBtn(i - state.paddingDays)}
            ${renderAddTaskBtn(i - state.paddingDays)}
            ${renderEditTaskBtn(i - state.paddingDays)}
            ${renderDeleteTaskBtn(i - state.paddingDays)}
          </div>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-1-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-1-${
            i - state.paddingDays
          }" data-task="task-1-${i - state.paddingDays}">${
        renderTaskTitle(i - state.paddingDays, 0)
          ? renderTaskTitle(i - state.paddingDays, 0)
          : ""
      }</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-2-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-2-${
            i - state.paddingDays
          }" data-task="task-2-${i - state.paddingDays}">${
        renderTaskTitle(i - state.paddingDays, 1)
          ? renderTaskTitle(i - state.paddingDays, 1)
          : ""
      }</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-3-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-3-${
            i - state.paddingDays
          }" data-task="task-3-${i - state.paddingDays}">${
        renderTaskTitle(i - state.paddingDays, 2)
          ? renderTaskTitle(i - state.paddingDays, 2)
          : ""
      }</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-4-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-4-${
            i - state.paddingDays
          }" data-task="task-4-${i - state.paddingDays}">${
        renderTaskTitle(i - state.paddingDays, 3)
          ? renderTaskTitle(i - state.paddingDays, 3)
          : ""
      }</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-5-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-5-${
            i - state.paddingDays
          }" data-task="task-5-${i - state.paddingDays}">${
        renderTaskTitle(i - state.paddingDays, 4)
          ? renderTaskTitle(i - state.paddingDays, 4)
          : ""
      }</label>
          <div class="tasks__checkbox">
            <input type="checkbox" name="checkbox" id="task-6-${
              i - state.paddingDays
            }">
          </div>
          <label class="tasks__todo" for="task-6-${
            i - state.paddingDays
          }" data-task="task-6-${i - state.paddingDays}">${
        renderTaskTitle(i - state.paddingDays, 5)
          ? renderTaskTitle(i - state.paddingDays, 5)
          : ""
      }</label>
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

// Renders and updates the current month and year text at the top of the calendar
const renderMonthYear = function () {
  monthYear.textContent = `${new Intl.DateTimeFormat("en-UK", {
    month: "long",
  }).format(currentDate)} ${currentDate.getFullYear()}`;
};

// Helper function that executes all the modular functions needed at once
export const executeOrder = function () {
  tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  // Renders and updates the current month and year text at the top of the calendar
  renderMonthYear();
  // Gets the current (or requested by previous or next month buttons) dates and saves it in state object
  getDate();
  // Renders all the markup for each date of currently viewed month
  renderDates();
  // Attaches eventlisteners to the add, edit, and delete buttons
  attachBtnHandler();
  // Renders the css styles according to whether the checkbox is checked or not
  attachCheckBoxHandler();
};

// Button for going through the months - Previous Month
btnPrevious.addEventListener("click", function () {
  if (currentDate.getMonth() === 0) {
    currentDate = new Date(state.year - 1, 11);
  } else {
    currentDate = new Date(state.year, state.month - 1);
  }
  executeOrder();
});

// Button for going through the months - Next Month
btnNext.addEventListener("click", function () {
  if (currentDate.getMonth() === 11) {
    currentDate = new Date(state.year + 1, 0);
  } else {
    currentDate = new Date(state.year, state.month + 1);
  }
  executeOrder();
});

////////////////////////////////////
// Function which adds all the eventlisteners to the buttons on every date
////////////////////////////////////

// Add eventlisteners to all the "add task" buttons on all the dates
// Also collects the dataset for the date of the clicked button
const attachBtnHandler = function () {
  const addTaskBtns = document.querySelectorAll(".tasks__btn--add");
  const editTaskBtns = document.querySelectorAll(".tasks__btn--edit");
  const deleteTaskBtns = document.querySelectorAll(".tasks__btn--delete");
  const weatherBtns = document.querySelectorAll(".tasks__btn--weather");

  addTaskBtns.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      // Get the dataset from the button itself when clicking the icon within the button
      clickedDate = event.target.closest(".tasks__btn--add").dataset.date;
      // Opens the add task modal, creates object of date info and task title, and saves to localstorage
      modal.openAddTask();
    })
  );

  editTaskBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      // Get the dataset from the button itself when clicking the icon within the button
      clickedDate = event.target.closest(".tasks__btn--edit").dataset.date;
      // Opens the edit modal, filters, and renders tasks for that day inside the modal
      modal.openEditTask();
      // Checks which tasks have been edited and saves them into localstorage
      editTaskHandler();
    });
  });

  deleteTaskBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      // Get the dataset from the button itself when clicking the icon within the button
      clickedDate = event.target.closest(".tasks__btn--delete").dataset.date;
      // Opens the delete modal, filters, and renders tasks for that day inside the modal
      modal.openDeleteTask();
      // Checks which tasks have been deleted and saves changes into localstorage
      deleteTaskHandler();
    });
  });

  weatherBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      // Get the dataset from the button itself when clicking the icon within the button
      clickedDate = event.target.closest(".tasks__btn--weather").dataset.date;
      // Opens the weather modal, and renders the weather from an API (openweathermap) for that day inside the modal
      modal.openWeatherModal();
    });
  });
};

const editTaskHandler = function () {
  // Select the dynamically rendered (by the modal.openEditTask) btns and inputs inside the edit modal
  const editTaskBtns = document.querySelectorAll(".edit-task-btn");
  const taskInputs = document.querySelectorAll(".modal__task-input");

  // Original and new values for the task titles to compare and update
  let originalValue;
  let newValue;

  editTaskBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === "Edit") {
        btn.textContent = "Save";
        taskInputs.forEach((input) => {
          // Sets the inputs from readonly to editable
          if (
            btn.dataset.task === input.dataset.task &&
            input.hasAttribute("readonly")
          ) {
            // Sets original value to be compared later
            originalValue = input.value;
            input.removeAttribute("readonly");
          }
        });
        // Sets inputs back to readonly, compares each input with original values and updates the changed titles, and finally updates localstorage
      } else if (btn.textContent === "Save") {
        btn.textContent = "Edit";

        taskInputs.forEach((input) => {
          if (
            btn.dataset.task === input.dataset.task &&
            !input.hasAttribute("readonly")
          ) {
            // Sets new value to replace with in tasks later
            newValue = input.value;

            const mappedTasks = tasks.map((task) => {
              if (
                task.taskDate !== Number(clickedDate) &&
                task.taskMonth === state.month
              ) {
                return task;
              } else if (
                task.taskDate === Number(clickedDate) &&
                task.taskTitle !== originalValue &&
                task.taskMonth === state.month
              ) {
                return task;
              } else if (
                task.taskDate === Number(clickedDate) &&
                task.taskTitle === originalValue &&
                task.taskMonth === state.month
              ) {
                task.taskTitle = newValue;
                return task;
              }
            });

            input.setAttribute("readonly", "readonly");

            localStorage.setItem("tasks", JSON.stringify(mappedTasks));
          }
        });
      }
    });
  });
};

const deleteTaskHandler = function () {
  // Select the dynamically rendered (by the modal.openDeleteTask) btns and inputs inside the delete task modal
  const deleteTaskBtns = document.querySelectorAll(".delete-task-btn");
  const taskInputs = document.querySelectorAll(".modal__task-input");

  let originalValueArray = [];

  deleteTaskBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.textContent === "Delete") {
        btn.textContent = "Confirm";
      } else if (btn.textContent === "Confirm") {
        btn.textContent = "Delete";
        taskInputs.forEach((item) => {
          if (btn.dataset.task === item.dataset.task) {
            // After confirm is clicked this value will be added to array which will later be used to filter out these to be deteled tasks from the main list of tasks
            originalValueArray.push(item.value);

            // After confirming deletion set input and button to display none
            btn.style.display = "none";
            item.style.display = "none";
          }
          const filteredTasks = tasks.filter((task) => {
            if (
              task.taskDate !== Number(clickedDate) &&
              task.taskMonth === state.month
            ) {
              return task;
            } else if (
              task.taskDate === Number(clickedDate) &&
              !originalValueArray.some((item) => item === task.taskTitle) &&
              task.taskMonth === state.month
            ) {
              return task;
            } else if (
              task.taskDate === Number(clickedDate) &&
              originalValueArray.some((item) => item === task.taskTitle) &&
              task.taskMonth === state.month
            ) {
              return;
            }
          });
          localStorage.setItem("tasks", JSON.stringify(filteredTasks));
        });
      }
    });
  });
};

// Listen to and get info from the checkboxes clicked
const attachCheckBoxHandler = function () {
  const checkBox = document.querySelectorAll('input[type="checkbox"]');
  const taskLabel = document.querySelectorAll(".tasks__todo");

  checkBox.forEach((box) =>
    box.addEventListener("change", function () {
      if (this.checked) {
        taskLabel.forEach((label) => {
          // Label dataset and checkbox id have matching values representing the month and date
          if (label.dataset.task === this.id) {
            label.style.opacity = 0.5;
            label.style.textDecoration = "line-through";
            // Traverses the DOM until it finds the textContent for the task
            const data = this.parentElement.nextElementSibling.textContent;
            // Sets the checked status for this task in the localstorage
            addCheckedStatus(data, true);
          }
        });
      } else {
        taskLabel.forEach((label) => {
          // Label dataset and checkbox id have matching values representing the month and date
          if (label.dataset.task === this.id) {
            label.style.opacity = 1;
            label.style.textDecoration = "none";
            // Traverses the DOM until it finds the textContent for the task
            const data = this.parentElement.nextElementSibling.textContent;
            // Sets the checked status for this task in the localstorage
            addCheckedStatus(data, false);
          }
        });
      }
    })
  );

  checkBox.forEach((box) => {
    const data = box.parentElement.nextElementSibling.textContent;
    tasks.forEach((task) => {
      if (task.taskTitle === data && task.checked === true) {
        box.setAttribute("checked", "");
        taskLabel.forEach((label) => {
          if (label.textContent === data) {
            label.style.opacity = 0.5;
            label.style.textDecoration = "line-through";
          }
        });
      }
    });
  });
};

const addCheckedStatus = function (data, status) {
  tasks.forEach((task) => {
    if (task.taskTitle === data) {
      task.checked = status;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
};

////////////////////////////////////
// PROFILE SECTION
////////////////////////////////////

avatarEl.addEventListener("click", function () {
  modal.openProfileModal();
});

export const renderProfile = function () {
  profile = JSON.parse(localStorage.getItem("profile"));

  if (localStorage.getItem("profile")) {
    usernameEl.textContent = profile.username;
    locationEl.textContent = profile.location;
  } else {
    usernameEl.textContent = "User";
    locationEl.textContent = "Location";
  }
};

export const renderProfileWeather = async function () {
  try {
    profileWeatherImg.classList.add("spinner-class");

    let data;

    if (localStorage.getItem("profile")) {
      const profile = JSON.parse(localStorage.getItem("profile"));
      data = await modal.weatherAPI(profile.location);

      if (!data.current) {
        throw new Error("Invalid location in your profile");
      } else {
        // Apply the data to the markup elements
        profileWeatherImg.classList.remove("spinner-class");
        profileWeatherImg.src = getWeatherIcon[data.current.condition.code];
        profileWeatherText.textContent = `${data.current.temp_c}°C`;
      }
    } else if (!localStorage.getItem("profile")) {
      profileWeatherImg.classList.remove("spinner-class");
      profileWeatherImg.style.display = "none";
      profileWeatherText.textContent = "No Location";
    }
  } catch (error) {
    console.error(error);
    profileWeatherImg.classList.remove("spinner-class");
    profileWeatherImg.style.display = "none";
    profileWeatherText.textContent = "Invalid Location";
  }
};

export const getWeatherIcon = {
  1000: "/weather/clear-day.svg",
  1003: "/weather/partly-cloudy-day.svg",
  1006: "/weather/cloudy.svg",
  1009: "/weather/overcast.svg",
  1030: "/weather/mist.svg",
  1063: "/weather/partly-cloudy-day-rain.svg",
  1066: "/weather/partly-cloudy-day-snow.svg",
  1069: "/weather/partly-cloudy-day-sleet.svg",
  1072: "/weather/partly-cloudy-day-hail.svg",
  1087: "/weather/thunderstorms-day.svg",
  1114: "/weather/snow.svg",
  1117: "/weather/extreme-snow.svg",
  1135: "/weather/fog.svg",
  1147: "/weather/overcast-fog.svg",
  1150: "/weather/overcast-day-drizzle.svg",
  1153: "/weather/drizzle.svg",
  1168: "/weather/hail.svg",
  1171: "/weather/hail.svg",
  1180: "/weather/partly-cloudy-day-rain.svg",
  1183: "/weather/drizzle.svg",
  1186: "/weather/rain.svg",
  1189: "/weather/rain.svg",
  1192: "/weather/overcast-rain.svg",
  1195: "/weather/overcast-rain.svg",
  1198: "/weather/hail.svg",
  1201: "/weather/hail.svg",
  1204: "/weather/sleet.svg",
  1207: "/weather/extreme-sleet.svg",
  1210: "/weather/partly-cloudy-day-snow.svg",
  1213: "/weather/snow.svg",
  1216: "/weather/partly-cloudy-day-snow.svg",
  1219: "/weather/snow.svg",
  1222: "/weather/overcast-snow.svg",
  1225: "/weather/extreme-snow.svg",
  1237: "/weather/hail.svg",
  1240: "/weather/rain.svg",
  1243: "/weather/extreme-rain.svg",
  1246: "/weather/extreme-rain.svg",
  1249: "/weather/sleet.svg",
  1252: "/weather/extreme-sleet.svg",
  1255: "/weather/snow.svg",
  1258: "/weather/overcast-snow.svg",
  1261: "/weather/hail.svg",
  1264: "/weather/extreme-hail.svg",
  1273: "/weather/thunderstorms-day-rain.svg",
  1276: "/weather/thunderstorms-extreme-rain.svg",
  1279: "/weather/thunderstorms-day-snow.svg",
  1282: "/weather/thunderstorms-extreme-snow.svg",
};

////////////////////////////////////
// THEME SECTION
////////////////////////////////////

const themeBtns = document.querySelectorAll(".themes__btn");

let themeID = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : "purple";

themeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    localStorage.setItem("theme", JSON.stringify(btn.id));
    loadTheme();
    location.replace(location.href);
  });
});

// Function that loads the theme depending on whether there is one saved in local storage or not
const loadTheme = function () {
  document.documentElement.classList.add(themeID);
};

loadTheme();
renderProfile();
renderProfileWeather();
getDate();
renderMonthYear();
renderDates();
attachBtnHandler();
attachCheckBoxHandler();
