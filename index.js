import ShowBooks  from "./modules/bookScript.js";
import { DateTime } from './modules/luxon.js';


const titleInput = document.querySelector('.book-title');
const authorInput = document.querySelector('.book-author');

const addBtn = document.querySelector('.add-btn');
const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-new-link');
const contactLink = document.querySelector('.contact-link');
const listCon = document.querySelector('.list-con');
const contactCon = document.querySelector('.contact');
const formCon = document.querySelector('.form-con');

addLink.addEventListener('click', () => {
  listCon.classList.add('disapear');
  formCon.classList.remove('disapear');
  contactCon.classList.add('disapear');
});

listLink.addEventListener('click', () => {
  listCon.classList.remove('disapear');
  formCon.classList.add('disapear');
  contactCon.classList.add('disapear');
});

contactLink.addEventListener('click', () => {
  listCon.classList.add('disapear');
  formCon.classList.add('disapear');
  contactCon.classList.remove('disapear');
});

const dateTime = DateTime.now();
document.getElementsByClassName('date-time').innerHTML = dateTime.toLocaleString(
  DateTime.DATETIME_MED,
);


addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  ShowBooks.addBooks(title, author);
  ShowBooks.showBook();
  titleInput.value = '';
  authorInput.value = '';
});

window.addEventListener('DOMContentLoaded', () => {
  ShowBooks.showBook();
});