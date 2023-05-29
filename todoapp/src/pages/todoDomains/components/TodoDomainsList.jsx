import {
  Card,
  Checkbox,
  Button
} from "semantic-ui-react";
// CRUD: read and create list
import { TodoContext } from "../service/TodoContext.js";
import React, { useContext } from "react";
// UpdateTodo Component


const UpdateTodo = ({ todo }) => {
    const { updateTodo } = useContext(TodoContext);

    const handleUpdateTodo = () => {
        updateTodo(todo);
    };

    return (
        <Checkbox toggle checked={todo.completed} onChange={handleUpdateTodo} />
    );
};


// DeleteTodo Component
const DeleteTodo = ({ todo }) => {
    const { deleteTodo } = useContext(TodoContext);

    const handleDeleteTodo = () => {
        deleteTodo(todo.id);
    };

    return <Button onClick={handleDeleteTodo}>Delete</Button>;
};


const TodoDomainsList = () => {
  const { todos } = useContext(TodoContext);

  //console.log("todos list", todos);
  if (todos === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Todos List</h2>
      <hr />
      <Card.Group>
        {todos.map((todo) => (
          <Card key={todo.id}>
            <Card.Content>
              <Card.Description>id: {todo.id}</Card.Description>
              <Card.Header>{todo.text}</Card.Header>
              <Card.Meta>Author: {todo.author}</Card.Meta>
              <Card.Description>Due: {todo.due}</Card.Description>
              <br />
              <UpdateTodo todo={todo} />
            </Card.Content>
            <Card.Content extra>
              <DeleteTodo todo={todo}  />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default TodoDomainsList;


