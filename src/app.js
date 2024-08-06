import './script/component/index.js';

import { notesData } from './script/data/notesData.js';

// Get elements
const notesListElement = document.querySelector('#notesList');

// Create note item
function createNoteItemElement({ id, title, body, createdAt, archived }) {  
  return `
    <article class="note-item">
    <h3 class="note">
      <span class="note-upper">${title}</span>
    </h3>
    <div class="note__body">
      <div>${body}</div>
    </div>
    <div class="note__createdAt">
      <p>Dibuat : ${new Date(createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })}</p>
    </div>
  </article>
    </div>
  `;
}

// Create all notes
const listOfNoteItem = notesData.map((noteData) => {
  return createNoteItemElement(noteData);
});

notesListElement.innerHTML = listOfNoteItem.join('');
