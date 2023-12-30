let monthNavigation = -1;
let tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];
const calendar = document.querySelector(".organiser__dates");
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const state = {
    day: null,
    date: null,
    month: null,
    year: null
};
const getDate = function() {
    const currentDate = new Date();
    if (monthNavigation !== 0) state.month = currentDate.setMonth(new Date().getMonth() + monthNavigation);
};
getDate();
console.log(state);
console.log(new Date().getMonth() + monthNavigation);

//# sourceMappingURL=index.aa69868b.js.map
