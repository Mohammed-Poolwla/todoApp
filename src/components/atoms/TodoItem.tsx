import React from 'react';
import { Checkbox, ListItem, Text, Button } from '@chakra-ui/react';
import { Todo } from '../utils/types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: () => void;
  deleteTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem justifyContent={'space-between'} p={1} display={'flex'} backgroundColor={todo.completed ? 'green.100' : 'white'} borderBottom={'1px solid gray'}>
      <Checkbox isChecked={todo.completed} onChange={toggleTodo}>
        <Text textDecoration={todo.completed ? 'line-through' : 'none'}>{todo.text}</Text>
      </Checkbox>
      <Button colorScheme="red" size="sm" onClick={deleteTodo}>
        Delete
      </Button>
    </ListItem>
  );
};

export default TodoItem;
