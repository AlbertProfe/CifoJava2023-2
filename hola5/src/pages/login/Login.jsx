import { createContext, useContext, useState } from "react";

const CurrentUserContext = createContext(null);

export default function Login() {

  const [currentUser, setCurrentUser] = useState(null);

  return (
    <>
        <h1 style={{ padding: "20px", backgroundColor: "#E8E8E8" }}>
            Fake Log in {" "}
        </h1>
        <div style={{ backgroundColor: "#D0D0D0", padding: "12px" }}>
            <br />
        <CurrentUserContext.Provider
        value={{
            currentUser,
            setCurrentUser,
        }}
        >
        <Form />
        </CurrentUserContext.Provider>
        </div>
    </>
  );
}

function Form({ children }) {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
    
  );
}

function LoginButton() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser !== null) {
    return <p>You logged in as {currentUser.name}.</p>;
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Carla WhereIs" });
      }}
    >
      Log in as Carla WhereIs
    </Button>
  );
}

function Panel({ title, children }) {
  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
