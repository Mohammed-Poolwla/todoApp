import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import TodoApp from "../components/organisms/TodoApp";
import { TodoProvider } from "../context/todoContext";

test("renders TodoApp component", () => {
  const { getByText, getByPlaceholderText } = render(
    <ChakraProvider>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </ChakraProvider>
  );


  // Check if the input field for adding new todos is rendered
  const inputElement = getByPlaceholderText("Enter a new todo");
  expect(inputElement).toBeInTheDocument();
});
