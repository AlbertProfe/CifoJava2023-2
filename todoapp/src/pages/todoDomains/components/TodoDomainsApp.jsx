import React, { useContext } from "react";
import TodoDomainsAdd from "../components/TodoDomainsAdd";
//import TodoList from "./TodoList";
import { TodoContext, TodoProvider } from "../service/TodoContext.js";
import {
  Container,Divider
} from "semantic-ui-react";
import TodoDomainsList from "./TodoDomainsList";

const TodoDomains = () => {
  const { createTodo} = useContext(TodoContext);

  const handleCreateTodo = (todo) => {
    createTodo(todo);
  };

  
  return (
    <Container>
      <br />
      <h1>Todo App</h1>
      <p>
        A todo grid/cards with API Rest mockapi.io, with a useSate, semantic and
        a service layer: axios and context. High decoupled version.
      </p>
      <TodoDomainsAdd onCreate={handleCreateTodo} />
      <Divider />

      <TodoDomainsList />
    </Container>
  );
};

const TodoDomainsApp = () => {
  return (
    <TodoProvider>
      <TodoDomains />
    </TodoProvider>
  );
};

export default TodoDomainsApp;

