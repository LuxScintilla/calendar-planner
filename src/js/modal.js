import * as main from "./main.js";

const backDrop = document.querySelector(".modal__backdrop");
const addTaskModal = document.querySelector(".modal__new-task");
const editTaskModal = document.querySelector(".modal__edit-task");
const deleteTaskModal = document.querySelector(".modal__delete-task");

const modalForm = document.querySelector(".modal__form");
const addTaskInput = document.querySelector(".modal__task-input");

const editContainer = document.querySelector(".modal__render-container");

const saveBtn = document.querySelector(".modal__btn-save");
const editBtn = document.querySelector(".modal__btn-edit");
const doneBtn = document.querySelector(".modal__btn-done");
const deleteBtn = document.querySelector(".modal__btn-delete");
const cancelBtn = document.querySelector(".modal__btn-cancel");

modalForm.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

saveBtn.addEventListener("click", function (event) {
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

export const openAddTask = function () {
  backDrop.style.display = "block";
  addTaskModal.style.display = "flex";
  addTaskInput.focus();
};

export const openEditTask = function () {
  let markup = "";
  let i = 1;
  const filtered = main.tasks.filter(
    (task) => task.taskDate === Number(main.clickedDate)
  );
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
  backDrop.style.display = "block";
  deleteTaskModal.style.display = "flex";
};

cancelBtn.addEventListener("click", function () {
  backDrop.style.display = "none";
  addTaskModal.style.display = "none";
  editTaskModal.style.display = "none";
  deleteTaskModal.style.display = "none";
});

doneBtn.addEventListener("click", function () {
  backDrop.style.display = "none";
  addTaskModal.style.display = "none";
  editTaskModal.style.display = "none";
  deleteTaskModal.style.display = "none";

  main.executeOrder();
});
