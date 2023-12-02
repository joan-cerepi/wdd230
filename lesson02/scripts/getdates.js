const currentYear = document.getElementById("currentYear");
const lastModification = document.getElementById("lastModified");
const currentDate = new Date();

currentYear.textContent = currentDate.getFullYear();
lastModification.textContent = document.lastModified;
