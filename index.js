function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(data => {
    renderBooks(data);
    addPages(data);
    findBook(data);
    findCharacter(data);
  })
}

function findCharacter(books) {
  let characters = books.flatMap(book => book.characters);
  let characterUrl = characters[1030];
  fetch(characterUrl)
  .then(res => res.json())
  .then(character => {
    const main = document.querySelector('main');
    const h2 = document.createElement('h2')
    h2.innerHTML = `${character.name} is the 1031st character in the Game of Thrones series!`;
    main.appendChild(h2); 
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book, index) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `'${book.name}': Book ${index + 1} in the Game of Thrones series!`;
    main.appendChild(h2);
  });
}

function addPages(books) {
  const main = document.querySelector('main');
  let h2 = document.createElement('h2');
  let sumPages = 0;
  books.forEach(book => {
    sumPages += book.numberOfPages;
  })
  h2.innerHTML = `There are a total of ${sumPages} pages in the Game of Thrones series!`;
  main.appendChild(h2);
}

function findBook(books) {
  const main = document.querySelector('main');
  let h2 = document.createElement('h2');
  let fifthBook = books.find((book, index) => index === 4);
  if (fifthBook) {
      h2.innerHTML = `'${fifthBook.name}' is the fifth book in the Game of Thrones series!`;
      main.appendChild(h2);
    }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

