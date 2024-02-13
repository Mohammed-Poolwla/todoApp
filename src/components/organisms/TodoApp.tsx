import React from 'react';
import { VStack } from '@chakra-ui/react';
import AddTodoForm from './AddTodoForm';
import TodoList from '../molecules/TodoList';
import { useTodos } from '../../hooks/useTodos';

const TodoApp: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <VStack align="stretch" spacing={4} p={4}>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </VStack>
  );
};

export default TodoApp;
