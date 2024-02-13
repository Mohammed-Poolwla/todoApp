import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import TodoApp from "./components/organisms/TodoApp";
import { TodoProvider } from "./context/todoContext";

function App() {
  return (
    <ChakraProvider>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </ChakraProvider>
  );
}

export default App;
