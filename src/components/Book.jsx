import { useState, useEffect } from "react";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");

  const databaseUrl = "https://school-693f7-default-rtdb.europe-west1.firebasedatabase.app/bookstore.json";

  // Fetch books from Firebase on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(databaseUrl);
      const data = await response.json();
      if (data) {
        const booksArray = Object.keys(data).map((key) => ({
          id: key,
          text: data[key].title,
        }));
        setBooks(booksArray);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Add a new book to Firebase
  const addBook = async () => {
    if (!newBook.trim()) return; // Prevent adding empty books

    const newBookData = { title: newBook };

    try {
      await fetch(databaseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBookData),
      });
      setNewBook("");
      fetchBooks(); // Refresh book list
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const clearBooks = () => setBooks([]); // Clears all books locally (doesn't delete from Firebase)

  return (
    <div>
      <h1>My Book Store</h1>
      <input
        type="text"
        placeholder="Add a new book"
        value={newBook}
        onChange={(e) => setNewBook(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
      <button onClick={clearBooks}>Clear</button>

      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
