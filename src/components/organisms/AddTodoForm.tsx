import React, { useState } from 'react';
import { Input, Button, Flex } from '@chakra-ui/react';

interface AddTodoFormProps {
  addTodo: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const InputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  const handleAddTodo = () => {
    const inputText = InputRef.current?.value;
    if (inputText && inputText.trim() !== '') {
      addTodo(inputText);
      if (InputRef.current) {
        InputRef.current.value = '';
      }
    }
  };

  return (
    <Flex>
      <Input
        ref={InputRef}
        placeholder="Enter a new todo"
        mr={2}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
    </Flex>
  );
};

export default AddTodoForm;
