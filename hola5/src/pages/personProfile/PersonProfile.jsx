import { useReducer } from "react";

function personOperations(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        surname: state.surname,
        age: state.age + 1,
      };
    }
    case "decremented_age": {
      return {
        name: state.name,
        surname: state.surname,
        age: state.age - 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        surname: state.surname,
        age: state.age,
      };
    }
    case "changed_surname": {
      return {
        name: state.name,
        surname: action.nextSurName,
        age: state.age,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialPerson = { name: "Taylor", surname: "Feels", age: 42 };

export default function PersonProfile() {

  const [person, trigger] = useReducer(personOperations, initialPerson);

  return (
    <>
      <h1> Person Profile form</h1>
      <hr />
      <br />
      <h3> Modify data</h3>
      <label>Name</label>
      <input
        value={person.name}
        onChange={(e) =>
          trigger({
            type: "changed_name",
            nextName: e.target.value,
          })
        }
      />
      <label>Surame</label>
      <input
        value={person.surname}
        onChange={(e) =>
          trigger({
            type: "changed_surname",
            nextSurName: e.target.value,
          })
        }
      />
      <button onClick={() => trigger({ type: "incremented_age" })}>
        {" "}
        Increment age
      </button>
      <button onClick={() => trigger({ type: "decremented_age" })}>
        Decrement age
      </button>
      <br /> <br /> <br />
      <h3>Person Profile</h3>
      <p>
        <strong>Name:</strong> {person.name}
      </p>
      <p>
        <strong>Surname:</strong> {person.surname}
      </p>
      <p>
        <strong>Age:</strong> {person.age}
      </p>
    </>
  );
}
