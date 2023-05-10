import { Button, Input, Checkbox } from "semantic-ui-react";
import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    text: "lean how to communicate",
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
     case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          author: "",
          due: "",
          completed: false
        }
      ];
    }
    case "blabla": {
      return;
    }
    default: {
      return state;
    }
  }};


export default function ToDoApp(){
    const [state, dispatch] = useReducer(reducer, initialTodos);

    return (
      <>
      <div style={{margin: "40px"}}>        
        <br />
        <Button onClick={
          () => dispatch({ type: "add" })}>Create Todo</Button>
        <br />
        <span>todo id</span> {" "}
        <Button>Delete</Button>
        <Input placeholder="Write something" />
        <Checkbox toggle />
        <br />
        </div>

      </>
    );
};