import { Button, Input, Checkbox } from "semantic-ui-react";
import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    text: "lean how to comunicate",
    completed: true,
    author: "Faby",
    due: 1 / 5 / 2022
  },
  {
    id: 2,
    text: "road out of hell",
    complete: false,
    author: "Alex",
    due: 1 / 6 / 2022
  }
];

function reducer(state, action) {
  switch (action.type) {
    case "bla": {
      return;
    }
    case "blabla": {
      return;
    }
    default: {
      return state;
    }
  }};


export default function ToDoApp(){
    const [state, dispacher] = useReducer (reducer, initialTodos);

    return (
      <>
        <br />
        <span>ToDo</span>
        <Button>Delete</Button>
        <Input placeholder="Write something" />
        <Checkbox toggle />
        <br />
      </>
    );
};