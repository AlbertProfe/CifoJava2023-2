import { Button, Input, Checkbox, Label } from "semantic-ui-react";
import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Python",
    completed: true,
    author: "Faby",
    due: 1 / 5 / 2022,
  },
  {
    id: 2,
    text: "Spring Boot",
    complete: false,
    author: "Alex",
    due: 1 / 6 / 2022,
  },
  {
    id: 3,
    text: "React",
    complete: false,
    author: "Alex",
    due: 1 / 6 / 2022,
  },
  {
    id: 4,
    text: "Ruby on Rails",
    complete: false,
    author: "Alex",
    due: 1 / 6 / 2022,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          author: "",
          due: "",
          completed: false,
        },
      ];
    }
    case "delete": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "clear": {
      return [...initialTodos];
    }
    default: {
      return state;
    }
  }
}

export default function ToDoApp() {
  const [state, dispatch] = useReducer(reducer, initialTodos);

  return (
    <>
      <div style={{ margin: "40px" }}>
        <br />
        <Button onClick={() => dispatch({ type: "add" })}>Create Todo</Button>
        {"  "}
        <Button onClick={() => dispatch({ type: "clear" })}>Clear Todo</Button>
        <br />
        <br />
      </div>
      <div style={{ margin: "40px" }}>
        {state.map((item) => (
          <>
            <Label round value={item.id}>
              {item.id}
            </Label>{" "}
            {"  "}
            <Button
              secondary
              onClick={() => dispatch({ type: "delete", payload: item.id })}
            >
              Delete
            </Button>{" "}
            <Input placeholder="Write something" value={item.text} /> {"  "}
            <Checkbox toggle />
            <br />{" "}
          </>
        ))}
      </div>
    </>
  );
}
