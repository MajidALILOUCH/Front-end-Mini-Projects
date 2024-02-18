const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}

// second solution with local storage

// let add = document.getElementById("add");
// let container = document.querySelector(".notes-container");

// // Empty Array To Store The notes
// let arrayOfNotes = [];

// // Check if Theres notes In Local Storage
// if (localStorage.getItem("notes")) {
//   arrayOfNotes = JSON.parse(localStorage.getItem("notes"));
// }

// // Trigger Get Data From Local Storage Function
// getDataFromLocalStorage();

// // Add note
// add.onclick = function () {
//   addNoteToArray(); // Add Note To Array Of notes
// };

// container.addEventListener("click", (e) => {
//   // Delete Button
//   if (
//     e.target.classList.contains("delete") ||
//     e.target.parentElement.classList.contains("delete")
//   ) {
//     // Get the parent element with the "note" class
//     const noteElement = e.target.closest(".note");
//     // Get the data-id attribute from the note element
//     const noteId = noteElement.getAttribute("data-id");

//     // Remove Note From Local Storage
//     deleteNoteWith(noteId);

//     // Remove Element From Page
//     noteElement.remove();
//   }
//   // Edit Button
//   if (
//     e.target.classList.contains("edit") ||
//     e.target.parentElement.classList.contains("edit")
//   ) {
//     // Get the parent element with the "note" class
//     const noteElement = e.target.closest(".note");

//     // Toggle clicked Class
//     noteElement.classList.toggle("clicked");

//     // Toggle read-only attribute of the textarea
//     const textarea = noteElement.querySelector("textarea");
//     textarea.readOnly = !textarea.readOnly;
//   }
// });

// function addNoteToArray() {
//   // Note Data
//   const note = {
//     id: Date.now(),
//   };
//   // Push note To Array Of notes
//   arrayOfNotes.push(note);
//   // Add notes To Page
//   addElementsToPageFrom(arrayOfNotes);
//   // Add notes To Local Storage
//   addDataToLocalStorageFrom(arrayOfNotes);
// }

// function addElementsToPageFrom(arrayOfNotes) {
//   // Empty notes Div
//   container.innerHTML = "";
//   // Looping On Array Of notes
//   arrayOfNotes.forEach((note) => {
//     let div = document.createElement("div");

//     div.className = "note";
//     div.setAttribute("data-id", note.id);

//     div.innerHTML = `
//         <div class="head">
//           <button class="edit"><i class="fas fa-edit"></i></button>
//           <button class="delete"><i class=" fas fa-trash-alt"></i></button>
//         </div>
//         <textarea></textarea>
//   `;

//     container.appendChild(div);
//   });
// }

// function addDataToLocalStorageFrom(arrayOfNotes) {
//   window.localStorage.setItem("notes", JSON.stringify(arrayOfNotes));
// }

// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("notes");
//   if (data) {
//     let notes = JSON.parse(data);
//     addElementsToPageFrom(notes);
//   }
// }

// function deleteNoteWith(noteId) {
//   arrayOfNotes = arrayOfNotes.filter((note) => note.id != noteId);
//   addDataToLocalStorageFrom(arrayOfNotes);
// }

// first solution without local storage

// let add = document.getElementById("add");
// let container = document.querySelector(".notes-container");

// add.addEventListener("click", addNote);

// function addNote() {
//   let note = document.createElement("div");
//   note.className = "note";

//   note.innerHTML = `
//         <div class="head">
//           <button class="edit"><i class="fas fa-edit"></i></button>
//           <button class="delete"><i class="fas fa-trash-alt"></i></button>
//         </div>
//         <textarea></textarea>
//   `;

//   container.appendChild(note);

//   // Attach event listeners to the newly added "edit" and "delete" buttons
//   let editButtons = note.querySelectorAll(".edit");
//   let deleteButtons = note.querySelectorAll(".delete");

//   editButtons.forEach((editButton) => {
//     editButton.addEventListener("click", () => {
//       let note = editButton.parentElement.parentElement; // Get the parent note element
//       let textarea = note.querySelector("textarea");

//       // Toggle the "clicked" class on the parent note
//       note.classList.toggle("clicked");

//       // Toggle the "readonly" attribute on the textarea
//       textarea.readOnly = !textarea.readOnly;
//     });
//   });

//   deleteButtons.forEach((deleteButton) => {
//     deleteButton.addEventListener("click", () => {
//       // Remove the whole note when the delete button is clicked
//       note.remove();
//     });
//   });
// }
