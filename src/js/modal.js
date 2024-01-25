"use strict";

import * as main from "./main.js";

const backDrop = document.querySelector(".modal__backdrop");
const addTaskModal = document.querySelector(".modal__new-task");
const editTaskModal = document.querySelector(".modal__edit-task");
const deleteTaskModal = document.querySelector(".modal__delete-task");
const weatherModal = document.querySelector(".modal__weather");
const profileModal = document.querySelector(".modal__profile");

const modalForm = document.querySelector(".modal__form");
const addTaskInput = document.querySelector(".modal__task-input");

const usernameInput = document.querySelector(".username-input");
const locationInput = document.querySelector(".location-input");

const editContainer = document.querySelector(".modal__render-edit-container");
const deleteContainer = document.querySelector(
  ".modal__render-delete-container"
);

const saveBtn = document.querySelector(".modal__btn-save");
const profileSaveBtn = document.querySelector(".modal__btn-profile-save");
const doneBtn = document.querySelectorAll(".modal__btn-done");
const cancelBtn = document.querySelectorAll(".modal__btn-cancel");
const okBtn = document.querySelector(".modal__btn-ok");

modalForm.addEventListener("keydown", function (event) {
  // Stop anything from happening when user presses the enter key
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

///////////////////////////////////////////////
// SAVE BUTTON
///////////////////////////////////////////////

saveBtn.addEventListener("click", function (event) {
  // Object that will be saved into localstorage
  const dataObject = {
    taskDate: Number(main.clickedDate),
    taskMonth: main.state.month,
    taskTitle: addTaskInput.value,
  };

  // Push object to the end of the main tasks array
  main.tasks[main.tasks.length] = dataObject;

  localStorage.setItem("tasks", JSON.stringify(main.tasks));

  backDrop.style.display = "none";
  addTaskModal.style.display = "none";

  // Stop scrolling when modal is open
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";

  // Clear input field
  addTaskInput.value = "";

  // Render the calendar with the new data
  main.executeOrder();
});

///////////////////////////////////////////////
// OPEN ADD TASK MODAL
///////////////////////////////////////////////

export const openAddTask = function () {
  backDrop.style.display = "block";
  addTaskModal.style.display = "flex";
  addTaskInput.focus();

  // Stop scrolling when modal is open
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
};

///////////////////////////////////////////////
// OPEN EDIT TASK MODAL
///////////////////////////////////////////////

export const openEditTask = function () {
  // Collects the entire markup to be attached when done
  let markup = "";
  // Counter for the task numbers when rendering dynamically
  let i = 1;
  // Get only the tasks for the day and month you clicked
  const filtered = main.tasks.filter(
    (task) =>
      task.taskDate === Number(main.clickedDate) &&
      task.taskMonth === main.state.month
  );
  // For each task of selected generate the html markup
  filtered.forEach((task) => {
    markup += `<div class="modal__task-container">
      <label class="modal__task-label--edit" for="task">Task ${i}:</label>
      <input class="modal__task-input" name="task" type="text" data-task=${i} value="${task.taskTitle}" autocomplete="off" maxlength="30"
      readonly>
      <button class="edit-task-btn" data-task=${i}>Edit</button>
    </div>`;
    i++;
  });

  editContainer.innerHTML = "";
  editContainer.insertAdjacentHTML("afterbegin", markup);

  backDrop.style.display = "block";
  editTaskModal.style.display = "flex";

  // Stop scrolling when modal is open
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
};

///////////////////////////////////////////////
// OPEN DELETE TASK MODAL
///////////////////////////////////////////////

export const openDeleteTask = function () {
  // Collects the entire markup to be attached when done
  let markup = "";
  // Counter for the task numbers when rendering dynamically
  let i = 1;
  // Get only the tasks for the day and month you clicked
  const filtered = main.tasks.filter(
    (task) =>
      task.taskDate === Number(main.clickedDate) &&
      task.taskMonth === main.state.month
  );
  // For each task of selected generate the html markup
  filtered.forEach((task) => {
    markup += `<div class="modal__task-container">
      <label class="modal__task-label--delete" for="task">Task ${i}:</label>
      <input class="modal__task-input" name="task" type="text" data-task=${i} value="${task.taskTitle}" autocomplete="off" maxlength="30"
      readonly>
      <button class="delete-task-btn" data-task=${i}>Delete</button>
    </div>`;
    i++;
  });

  deleteContainer.innerHTML = "";
  deleteContainer.insertAdjacentHTML("afterbegin", markup);

  backDrop.style.display = "block";
  deleteTaskModal.style.display = "flex";

  // Stop scrolling when modal is open
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
};

///////////////////////////////////////////////
// OPEN WEATHER MODAL
///////////////////////////////////////////////

const weatherIMG = document.querySelector(".weather__img");
const weatherTemperature = document.querySelector(".weather__temp");
const humidityIMG = document.querySelector(".humidity");
const weatherHumidity = document.querySelector(".humidity__text");
const windIMG = document.querySelector(".wind");
const weatherWind = document.querySelector(".wind__text");

const KEY = "9b3d812c470e4cc4abf95058240901";

export const openWeatherModal = async function () {
  backDrop.style.display = "block";
  weatherModal.style.display = "flex";

  // Stop scrolling when modal is open
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";

  try {
    weatherIMG.classList.add("spinner-class");

    let data;

    if (localStorage.getItem("profile")) {
      const profile = JSON.parse(localStorage.getItem("profile"));
      data = await weatherAPI(profile.location);
      showElements();

      if (!data.current) {
        throw new Error("Invalid location in your profile");
      } else {
        // Apply the data to the markup elements
        weatherIMG.classList.remove("spinner-class");
        weatherIMG.src = getWeatherIcon[data.current.condition.code];
        weatherTemperature.textContent = `${data.current.temp_c}°C`;
        weatherHumidity.textContent = `${data.current.humidity}%`;
        weatherWind.textContent = `${data.current.wind_mph} mph`;
      }
    } else if (!localStorage.getItem("profile")) {
      weatherMarkup("Enter a location into your profile (top left)");
    }
  } catch (error) {
    console.error(error);
    weatherMarkup(
      "Invalid location! Please change your location to a valid city or country name"
    );
  }
};

const weatherMarkup = function (message) {
  weatherIMG.style.display = "none";
  weatherTemperature.style.fontSize = "2.4rem";
  weatherTemperature.textContent = message;
  humidityIMG.style.display = "none";
  weatherHumidity.style.display = "none";
  windIMG.style.display = "none";
  weatherWind.style.display = "none";
};

const showElements = function () {
  weatherIMG.style.display = "block";
  humidityIMG.style.display = "block";
  weatherHumidity.style.display = "inline-block";
  windIMG.style.display = "block";
  weatherWind.style.display = "inline-block";
};

export const weatherAPI = async function (location) {
  try {
    // Request data from weatherAPI
    const apiJSON = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}&aqi=no`
    );

    // Check if data has succesfully been retrieved
    if (!apiJSON.ok) {
      throw new Error("Invalid request, change location and try again");
    }

    // Convert data from JSON format
    const data = await apiJSON.json();

    console.log(data);

    return data;
  } catch (error) {
    // If something goes wrong crashes are caught here
    console.error(error);
  }
};

///////////////////////////////////////////////
// OPEN PROFILE MODAL
///////////////////////////////////////////////

export const openProfileModal = function () {
  main.profile = JSON.parse(localStorage.getItem("profile"));

  if (localStorage.getItem("profile")) {
    usernameInput.placeholder = main.profile.username;
    locationInput.placeholder = main.profile.location;
  } else {
    usernameInput.placeholder = "Username";
    locationInput.placeholder = "Location";
  }

  backDrop.style.display = "block";
  profileModal.style.display = "flex";
  usernameInput.focus();

  // Stop scrolling when modal is open
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";
};

///////////////////////////////////////////////
// PROFILE SAVE BUTTON
///////////////////////////////////////////////

const profileWeatherImg = document.querySelector(".profile__weather-img");

profileSaveBtn.addEventListener("click", function () {
  const dataObject = {
    username:
      localStorage.getItem("profile") && usernameInput.value === ""
        ? main.profile.username
        : usernameInput.value,
    location:
      localStorage.getItem("profile") && locationInput.value === ""
        ? main.profile.location
        : locationInput.value,
  };

  localStorage.setItem("profile", JSON.stringify(dataObject));

  main.renderProfile();
  main.renderProfileWeather();
  profileWeatherImg.style.display = "block";

  backDrop.style.display = "none";
  profileModal.style.display = "none";

  document.body.style.overflow = "auto";
  document.body.style.height = "auto";

  // Clear input field
  usernameInput.value = "";
  locationInput.value = "";
});

///////////////////////////////////////////////
// CANCEL BUTTON
///////////////////////////////////////////////

cancelBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    backDrop.style.display = "none";
    addTaskModal.style.display = "none";
    editTaskModal.style.display = "none";
    deleteTaskModal.style.display = "none";
    profileModal.style.display = "none";

    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
  });
});

///////////////////////////////////////////////
// DONE BUTTON
///////////////////////////////////////////////

doneBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    backDrop.style.display = "none";
    addTaskModal.style.display = "none";
    editTaskModal.style.display = "none";
    deleteTaskModal.style.display = "none";

    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
    // Render the calendar with the new data
    main.executeOrder();
  });
});

///////////////////////////////////////////////
// OK BUTTON
///////////////////////////////////////////////

okBtn.addEventListener("click", function () {
  backDrop.style.display = "none";
  weatherModal.style.display = "none";

  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
});
