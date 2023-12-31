const backDrop = document.querySelector(".modal__backdrop");
const addTaskModal = document.querySelector(".modal__new-task");
const editTaskModal = document.querySelector(".modal__edit-task");
const deleteTaskModal = document.querySelector(".modal__delete-task");

const saveBtn = document.querySelector(".modal__btn-save");
const editBtn = document.querySelector(".modal__btn-edit");
const deleteBtn = document.querySelector(".modal__btn-delete");
const cancelBtn = document.querySelector(".modal__btn-cancel");

cancelBtn.addEventListener("click", function () {
  backDrop.style.display = "none";
  addTaskModal.style.display = "none";
});

export const openAddTask = function () {
  backDrop.style.display = "block";
  addTaskModal.style.display = "flex";
};

export const openEditTask = function () {
  backDrop.style.display = "block";
  editTaskModal.style.display = "flex";
};

export const openDeleteTask = function () {
  backDrop.style.display = "block";
  deleteTaskModal.style.display = "flex";
};
