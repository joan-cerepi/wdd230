// Cache the DOM.
const inputChap = document.getElementById("favchap");
const addChapBtn = document.getElementById("addchap");
const listChaps = document.getElementById("list");

// Make sure the book and chapter are valid.
const validateInput = (userInput) => {
  const bom = {
    "1 nephi": 22,
    "2 nephi": 33,
    jacob: 7,
    enos: 1,
    jarom: 1,
    omni: 1,
    "words of mormon": 1,
    mosiah: 29,
    alma: 63,
    helaman: 16,
    "3 nephi": 30,
    "4 nephi": 1,
    mormon: 9,
    ether: 15,
    moroni: 10,
  };
  const cleanUserInput = userInput.toLowerCase().trim();
  const inputParts = cleanUserInput.split(" ");
  const bookTitle = inputParts.slice(0, inputParts.length - 1).join(" ");
  const bookChapter = Number(inputParts[inputParts.length - 1]);

  return (
    bom.hasOwnProperty(bookTitle) &&
    bookChapter > 0 &&
    bookChapter <= bom[bookTitle]
  );
};

// Convert any capitalization into title case.
const toTitleCase = (userInput) => {
  return userInput
    .split(" ")
    .map((word) => {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return `${firstLetter}${restOfWord}`;
    })
    .join(" ");
};

const openModal = () => {
  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".close");

  modal.style.display = "block";

  // Event Listeners.

  // When the user clicks on <span> (x), close the modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    // When the user clicks anywhere outside of the modal, close it
    if (e.target === modal) modal.style.display = "none";
  });
};

// Event Listeners.
addChapBtn.addEventListener("click", () => {
  const userInput = inputChap.value;

  if (userInput !== "" && validateInput(userInput)) {
    // Create new elements.
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");

    // Populate elements with data.
    listItem.textContent = toTitleCase(inputChap.value);
    deleteBtn.textContent = "❌";

    // Set Attributes.
    deleteBtn.setAttribute("aria-label", `Remove ${listItem.textContent}`);

    // Append elements.
    listItem.appendChild(deleteBtn);
    listChaps.appendChild(listItem);

    // Event Listeners.
    deleteBtn.addEventListener("click", () => {
      listChaps.removeChild(listItem);
    });
  } else {
    openModal();
  }

  inputChap.value = "";
  inputChap.focus();
});
