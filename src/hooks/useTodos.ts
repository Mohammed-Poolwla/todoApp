import { useMemo, useCallback } from 'react';
import { useTodoContext } from '../context/todoContext';
import { Todo } from '../components/utils/types';

export const useTodos = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoContext();

  const completedTodos = useMemo(() => todos.filter(todo => todo.completed), [todos]);
  const activeTodos = useMemo(() => todos.filter(todo => !todo.completed), [todos]);

  const memoizedToggleTodo = useCallback((id: number) => toggleTodo(id), [toggleTodo]);
  const memoizedDeleteTodo = useCallback((id: number) => deleteTodo(id), [deleteTodo]);

  return {
    todos,
    completedTodos,
    activeTodos,
    addTodo,
    toggleTodo: memoizedToggleTodo,
    deleteTodo: memoizedDeleteTodo,
  };
};
