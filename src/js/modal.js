import * as main from "./main.js";

const backDrop = document.querySelector(".modal__backdrop");
const addTaskModal = document.querySelector(".modal__new-task");
const editTaskModal = document.querySelector(".modal__edit-task");
const deleteTaskModal = document.querySelector(".modal__delete-task");

const addTaskInput = document.querySelector(".modal__task-input");

const saveBtn = document.querySelector(".modal__btn-save");
const editBtn = document.querySelector(".modal__btn-edit");
const deleteBtn = document.querySelector(".modal__btn-delete");
const cancelBtn = document.querySelector(".modal__btn-cancel");

saveBtn.addEventListener("click", function () {
  const dataObject = {
    taskDate: Number(main.clickedDate),
    taskMonth: main.state.month,
    taskTitle: addTaskInput.value,
  };

  main.tasks[main.tasks.length] = dataObject;

  localStorage.setItem("tasks", JSON.stringify(main.tasks));

  backDrop.style.display = "none";
  addTaskModal.style.display = "none";

  addTaskInput.value = "";

  main.executeOrder();

  console.log(main.tasks);
});

cancelBtn.addEventListener("click", function () {
  backDrop.style.display = "none";
  addTaskModal.style.display = "none";
  editTaskModal.style.display = "none";
  deleteTaskModal.style.display = "none";
});

export const openAddTask = function () {
  backDrop.style.display = "block";
  addTaskModal.style.display = "flex";
  addTaskInput.focus();
};

export const openEditTask = function () {
  backDrop.style.display = "block";
  editTaskModal.style.display = "flex";
};

export const openDeleteTask = function () {
  backDrop.style.display = "block";
  deleteTaskModal.style.display = "flex";
};
