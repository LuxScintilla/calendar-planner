import * as main from "./main.js";

const backDrop = document.querySelector(".modal__backdrop");
const addTaskModal = document.querySelector(".modal__new-task");
const editTaskModal = document.querySelector(".modal__edit-task");
const deleteTaskModal = document.querySelector(".modal__delete-task");

const modalForm = document.querySelector(".modal__form");
const addTaskInput = document.querySelector(".modal__task-input");

const editContainer = document.querySelector(".modal__render-edit-container");
const deleteContainer = document.querySelector(
  ".modal__render-delete-container"
);

const saveBtn = document.querySelector(".modal__btn-save");
const editBtn = document.querySelector(".modal__btn-edit");
const doneBtn = document.querySelectorAll(".modal__btn-done");
const deleteBtn = document.querySelector(".modal__btn-delete");
const cancelBtn = document.querySelector(".modal__btn-cancel");

modalForm.addEventListener("keydown", function (event) {
  // Stop anything from happening when user presses the enter key
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

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

  // Clear input field
  addTaskInput.value = "";

  // Render the calendar with the new data
  main.executeOrder();
});

export const openAddTask = function () {
  backDrop.style.display = "block";
  addTaskModal.style.display = "flex";
  addTaskInput.focus();
};

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
      <input class="modal__task-input" name="task" type="text" data-task=${i} value="${task.taskTitle}" autocomplete="off"
      readonly>
      <button class="edit-task-btn" data-task=${i}>Edit</button>
    </div>`;
    i++;
  });

  editContainer.innerHTML = "";
  editContainer.insertAdjacentHTML("afterbegin", markup);

  backDrop.style.display = "block";
  editTaskModal.style.display = "flex";
};

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
      <input class="modal__task-input" name="task" type="text" data-task=${i} value="${task.taskTitle}" autocomplete="off"
      readonly>
      <button class="delete-task-btn" data-task=${i}>Delete</button>
    </div>`;
    i++;
  });

  deleteContainer.innerHTML = "";
  deleteContainer.insertAdjacentHTML("afterbegin", markup);

  backDrop.style.display = "block";
  deleteTaskModal.style.display = "flex";
};

cancelBtn.addEventListener("click", function () {
  backDrop.style.display = "none";
  addTaskModal.style.display = "none";
  editTaskModal.style.display = "none";
  deleteTaskModal.style.display = "none";
});

doneBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    backDrop.style.display = "none";
    addTaskModal.style.display = "none";
    editTaskModal.style.display = "none";
    deleteTaskModal.style.display = "none";
    // Render the calendar with the new data
    main.executeOrder();
  });
});
