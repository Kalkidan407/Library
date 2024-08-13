function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

let myLibrary = [];

function render() {
  let library = document.querySelector("#library");
  library.innerHTML = "";
  form.reset();

  for (let i = 0; i <= myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookEl = document.createElement("div");

    bookEl.innerHTML = `
  <div class="storeBook">
    
    <div class="card-header" >
     <button class="remove-btn" onClick="removeBook(${i})"> ✖  </button>
      <h3 class="title"> " ${book.title} "</h3>;
      <h3 class="author">by  ${book.author}</h3>;
    </div>


<div class="card-body">
     <p class="page">  ${book.page} Pages</p>
      <button class="toggle-read-btn" onClick="toggleRead(${i})" 
      style="background-color: ${book.read ? "green" : "red"};">
       ${book.read ? "Reade" : "Not Reade Yet"}</button>
</div> </div>
`;

    library.style.display = "block";
    library.style.display = "flex";

    library.appendChild(bookEl);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let page = document.querySelector("#page").value;
  let read = document.querySelector("#read").value;
  read = false;

  let newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
  render();
}

// -------- -------- --------     ----------      --------     ------    ----------- ------ ----//

const adder = document.querySelector(".adder");
const form = document.querySelector(".bookForm");
const displayBtn = document.querySelector("#display");

const lightBtn = document.querySelector("#light-btn");

//--

// lightBtn.addEventListener("click", () => {
//   document.body.className.toggle("dark-mode");
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addBookToLibrary();
});

adder.addEventListener("click", () => {
  form.style = "display";
  let overLay = document.getElementById("overlay");
  overLay.style.display = "block";
  overLay.addEventListener("click", () => {
    form.style.display = "none";
    overLay.style.display = "none";
  });
});
