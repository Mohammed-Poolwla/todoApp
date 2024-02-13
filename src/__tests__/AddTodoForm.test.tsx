import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/organisms/AddTodoForm';

test('renders AddTodoForm component', () => {
  const { getByPlaceholderText, getByText } = render(<AddTodoForm addTodo={() => {}} />);
  const inputElement = getByPlaceholderText('Enter a new todo');
  expect(inputElement).toBeInTheDocument();
  const addButton = getByText('Add Todo');
  expect(addButton).toBeInTheDocument();
});

test('adds a new todo on clicking the button', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodoForm addTodo={addTodoMock} />);
  const inputElement = getByPlaceholderText('Enter a new todo');
  fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
  const addButton = getByText('Add Todo');
  fireEvent.click(addButton);
  expect(addTodoMock).toHaveBeenCalledWith('Buy groceries');
});

test('adds a new todo on pressing enter', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText } = render(<AddTodoForm addTodo={addTodoMock} />);
  const inputElement = getByPlaceholderText('Enter a new todo');
  fireEvent.change(inputElement, { target: { value: 'Buy groceries' } });
  fireEvent.keyPress(inputElement, { key: 'Enter', code: 13, charCode: 13 });
  expect(addTodoMock).toHaveBeenCalledWith('Buy groceries');
});

test('does not add a new todo if input is empty', () => {
  const addTodoMock = jest.fn();
  const { getByPlaceholderText, getByText } = render(<AddTodoForm addTodo={addTodoMock} />);
  const inputElement = getByPlaceholderText('Enter a new todo');
  fireEvent.change(inputElement, { target: { value: '' } });
  const addButton = getByText('Add Todo');
  fireEvent.click(addButton);
  expect(addTodoMock).not.toHaveBeenCalled();
});
