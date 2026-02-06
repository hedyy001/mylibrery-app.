const books = [
  { title:"Harry Potter", author:"J.K. Rowling", year:1997, wiki:"https://en.wikipedia.org/wiki/Harry_Potter", cover:"https://covers.openlibrary.org/b/id/8231856-L.jpg" },
  { title:"The Hobbit", author:"J.R.R. Tolkien", year:1937, wiki:"https://en.wikipedia.org/wiki/The_Hobbit", cover:"https://covers.openlibrary.org/b/id/6979861-L.jpg" },
  { title:"1984", author:"George Orwell", year:1949, wiki:"https://en.wikipedia.org/wiki/Nineteen_Eighty-Four", cover:"https://covers.openlibrary.org/b/id/7222246-L.jpg" },
  { title:"Pride and Prejudice", author:"Jane Austen", year:1813, wiki:"https://en.wikipedia.org/wiki/Pride_and_Prejudice", cover:"https://covers.openlibrary.org/b/id/8091016-L.jpg" },
  { title:"The Great Gatsby", author:"F. Scott Fitzgerald", year:1925, wiki:"https://en.wikipedia.org/wiki/The_Great_Gatsby", cover:"https://covers.openlibrary.org/b/id/8231996-L.jpg" },
  { title:"To Kill a Mockingbird", author:"Harper Lee", year:1960, wiki:"https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird", cover:"https://covers.openlibrary.org/b/id/8226196-L.jpg" },
  { title:"Moby-Dick", author:"Herman Melville", year:1851, wiki:"https://en.wikipedia.org/wiki/Moby-Dick", cover:"https://covers.openlibrary.org/b/id/8235101-L.jpg" },
  { title:"Catcher in the Rye", author:"J.D. Salinger", year:1951, wiki:"https://en.wikipedia.org/wiki/The_Catcher_in_the_Rye", cover:"https://covers.openlibrary.org/b/id/8228691-L.jpg" },
  { title:"Lord of the Rings", author:"J.R.R. Tolkien", year:1954, wiki:"https://en.wikipedia.org/wiki/The_Lord_of_the_Rings", cover:"https://covers.openlibrary.org/b/id/8231841-L.jpg" },
  { title:"Animal Farm", author:"George Orwell", year:1945, wiki:"https://en.wikipedia.org/wiki/Animal_Farm", cover:"https://covers.openlibrary.org/b/id/8231999-L.jpg" }
];

function addToList(book) {
  const list = JSON.parse(localStorage.getItem("favourites")) || [];
  if (!list.find(b => b.title === book.title)) {
    list.push(book);
    localStorage.setItem("favourites", JSON.stringify(list));
    alert("Book added to My List");
  }
}

function createCard(book) {
  const div = document.createElement("div");
  div.className = "book-card";
  div.innerHTML = `
    <img src="${book.cover}">
    <h4>${book.title}</h4>
    <p>${book.author}</p>
    <button onclick="window.open('${book.wiki}')">More Information</button>
    <button onclick='addToList(${JSON.stringify(book)})'>Add to My List</button>
  `;
  return div;
}

document.addEventListener("DOMContentLoaded", () => {
  const allBooks = document.getElementById("allBooks");
  if (allBooks) books.forEach(b => allBooks.appendChild(createCard(b)));

  const favList = document.getElementById("favouritesList");
  if (favList) {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    favList.innerHTML = favs.length ? "" : "<li>No books added yet</li>";
    favs.forEach(b => {
      const li = document.createElement("li");
      li.textContent = `${b.title} — ${b.author} (${b.year})`;
      favList.appendChild(li);
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }
});
