// import { useState } from 'react';
// import './App.css';
// import ReactiveButton from 'reactive-button';


// function App() {
//   const [todo, setTodo] = useState({ description: '', date: '', status: '' });
//   const [todos, setTodos] = useState([]);

//   // Column definitions for ag-grid
//   const columnDefs = [
//     { field: 'description', filter: true },
//     { field: 'date', filter: true },
//     { field: 'status', filter: true },
//   ];

//   const inputChanged = (event) => {
//     setTodo({ ...todo, [event.target.name]: event.target.value });
//   };

//   const addTodo = () => {
//     if (todo.description && todo.date && todo.status) {  // Ensure that all fields are filled before adding
//       setTodos([...todos, todo]);
//       setTodo({ description: '', date: '', status: '' }); // Reset fields after adding
//     } else {
//       alert('Please fill out all fields');
//     }
//   };

//   return (
//     <>
//       <input
//         placeholder="Description"
//         name="description"
//         value={todo.description}
//         onChange={inputChanged}
//       />
//       <input
//         placeholder="Date"
//         name="date"
//         value={todo.date}
//         onChange={inputChanged}
//       />
//       <input
//         placeholder="Status"
//         name="status"
//         value={todo.status}
//         onChange={inputChanged}
//       />
//       <ReactiveButton rounded idleText="Add"/>
//       {/* <button onClick={addTodo}>Add</button> */}
//       <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
//         <AgGridReact rowData={todos} columnDefs={columnDefs} />
//       </div>
//     </>
//   );
// }

// export default App;

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Todolist from './components/Todolist';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Book2 from './components/Book2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/contact">Contact</Link>{' '}
          <Link to="/about">About</Link>{' '}
          <Link to="/todolist">Todolist</Link>{' '}
          <Link to="/booklist">Book</Link>{' '}
          
          
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/booklist" element={<Book2 />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;