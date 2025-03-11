import { useState, useEffect } from 'react';

function Book2() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://school-693f7-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => setBooks(Object.values(data)))
    .catch(err => console.error(err))
  }

  return (
    <div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
      <h1>Bookstore Inventory</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{  }}>
            <th style={{ padding: '10px' }}>Title</th>
            <th style={{ padding: '10px' }}>Author</th>
            <th style={{ padding: '10px' }}>Year</th>
            <th style={{ padding: '10px' }}>ISBN</th>
            <th style={{ padding: '10px' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td style={{ padding: '10px', textAlign: 'center' }}>{book.title}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{book.author}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{book.year}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{book.isbn}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}>{book.price}</td>
                <td style={{ padding: '10px', textAlign: 'center' }}><button>Delete</button></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '10px' }}>
                No books found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Book2;
