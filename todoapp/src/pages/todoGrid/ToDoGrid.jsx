import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Card,
  Checkbox,
  Button,
  Form,
  Divider,
  Icon,
} from "semantic-ui-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

// https://github.com/mockapi-io/docs/wiki/Quick-start-guide
// API Context
const ApiContext = React.createContext();

// API_URL mockapi.io
const API_URL = "https://645fbe78ca2d89f7e74cf4c9.mockapi.io/v1/";

// Custom Hook to use API Context
const useApiContext = () => useContext(ApiContext);

// CreateTodo Component
const CreateTodo = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [due, setDue] = useState("");
  const { addTodo } = useApiContext();

  const handleAddTodo = () => {
    addTodo({
      id: uuidv4(),
      text,
      author,
      due,
    });

    setText("");
    setAuthor("");
    setDue("");
  };

  return (
    <Form>
      <Form.Group>
        <Card>
          <Card.Content>
            <Card.Header>Create Todo</Card.Header>
            <Card.Meta>
              <p>{uuidv4()}</p>
            </Card.Meta>
            <br />
            <Form.Field>
              <label>Text</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter todo text"
              />
            </Form.Field>
            <Form.Field>
              <label>Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter author name"
              />
            </Form.Field>
            <Form.Field>
              <label>Date</label>
              <input
                type="date"
                value={due}
                onChange={(e) => setDue(e.target.value)}
                placeholder="Enter date to handle"
              />
            </Form.Field>
            <Divider />
            <Form.Field>
              <Checkbox label="use fetch/axios" />
            </Form.Field>

            <Divider />

            <Button onClick={handleAddTodo}>Add Todo</Button>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="time" />
              UTC Central
            </a>
          </Card.Content>
        </Card>
      </Form.Group>
    </Form>
  );
};

// UpdateTodo Component
const UpdateTodo = ({ todo }) => {
  const { updateTodo } = useApiContext();

  const handleUpdateTodo = () => {
    updateTodo(todo.id);
  };

  return (
    <Checkbox toggle checked={todo.completed} onChange={handleUpdateTodo} />
  );
};

// ReadTodos Component
const ReadTodos = () => {
  const { todos } = useApiContext();

  return (
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
            <DeleteTodo todo={todo} />
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

// DeleteTodo Component
const DeleteTodo = ({ todo }) => {
  const { deleteTodo } = useApiContext();

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return <Button onClick={handleDeleteTodo}>Delete</Button>;
};

// Main Todos Component
const ToDoGrid = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_URL}/todo`);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = (newTodo) => {
    fetch(`${API_URL}/todo/`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        setTodos([...todos, newTodo]);
        const response = {};
        if (response.ok) {
          return response.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        // handle error
      });
  };

  const updateTodo = async (id) => {
    try {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      await axios.put(`${API_URL}/todo/${id}`, updatedTodos);
      setTodos(updatedTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todo/${id}`);
      const filteredTodos = todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ApiContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      <Container>
        <br/>
        <h1>Todos</h1>
        <p>
          A todo grid/cards with API Rest mockapi.io, with a useSate, semantic and axios.
        </p>
        <CreateTodo />

        <Divider />

        <ReadTodos />
      </Container>
    </ApiContext.Provider>
  );
};

export default ToDoGrid;



  /*
  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post('/api/todos', newTodo); 
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error(error);
    }
  };
*/