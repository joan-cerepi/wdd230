// Cache the DOM.
const inputChap = document.getElementById("favchap");
const addChapBtn = document.getElementById("addchap");
const listChaps = document.getElementById("list");
// const bom = {
//   "1 nephi": 22,
//   "2 nephi": 33,
//   jacob: 7,
//   enos: 1,
//   jarom: 1,
//   omni: 1,
//   "words of mormon": 1,
//   mosiah: 29,
//   alma: 63,
//   helaman: 16,
//   "3 nephi": 30,
//   "4 nephi": 1,
//   mormon: 9,
//   ether: 15,
//   moroni: 10,
// };

// Event Listeners.
addChapBtn.addEventListener("click", () => {
  const inputValue = inputChap.value.toLowerCase().trim();

  if (inputValue !== "") {
    // Create new elements.
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");

    // Populate elements with data.
    listItem.textContent = inputChap.value;
    deleteBtn.textContent = "❌";

    // Append elements.
    listItem.appendChild(deleteBtn);
    listChaps.appendChild(listItem);

    // Event Listeners.
    deleteBtn.addEventListener("click", () => {
      listChaps.removeChild(listItem);
      inputChap.focus();
      inputChap.value = "";
    });
  } else {
    inputChap.focus();
  }
});
