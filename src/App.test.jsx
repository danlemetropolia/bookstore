import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom matchers
import Todolist from './components/Todolist';

test('adds a new todo and clears all todos', () => {
  render(<Todolist />);

  // Add a new todo item
  const input = screen.getByPlaceholderText('Add a new todo');
  const addButton = screen.getByText('Add Todo');
  fireEvent.change(input, { target: { value: 'New Todo Item' } });
  fireEvent.click(addButton);

  // Check if the new todo item is rendered
  const newItem = screen.getByText('New Todo Item');
  expect(newItem).toBeInTheDocument();  // Now works correctly with jest-dom

  // Clear all todos
  const clearButton = screen.getByText('Clear');
  fireEvent.click(clearButton);

  // Ensure the todo list is cleared
  const clearedItem = screen.queryByText('New Todo Item');
  expect(clearedItem).not.toBeInTheDocument(); // The todo should not be in the document anymore
});
