const yearContainer = document.querySelector(".current-year");
const year = new Date().getFullYear();
const lastModContainer = document.querySelector(".last-modified");

yearContainer.textContent = year;
lastModContainer.textContent = document.lastModified;
