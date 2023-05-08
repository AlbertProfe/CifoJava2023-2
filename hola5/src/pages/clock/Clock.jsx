import { useReducer, useEffect, useRef } from "react";

const initialState = {
  isRunning: false,
  time: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}

const Clock = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const idRef = useRef(0);

  useEffect(() => {

    if (!state.isRunning) {
      return;
    }

    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };

  }, [state.isRunning]);

  // https://www.w3schools.com/colors/colors_shades.asp
  return (
    <>
      <h1 style={{ padding: "20px", backgroundColor: "#E8E8E8" }}>
        Clock manager{" "}
      </h1>
      <div style={{ backgroundColor: "#D0D0D0", padding: "12px" }}>
        <br />
        <div
          style={{
            backgroundColor: "#F0F0F0",
            boxShadow: "0 4px 20px 0 rgba(0,0,0,0.8)",
            transition: "0.3s",
            width: "40%",
            borderRadius: "5px",
            padding: "12px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          {state.time}s
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <button
            style={{ margin: "8px" }}
            onClick={() => dispatch({ type: "start" })}
          >
            Start
          </button>
          <button
            style={{ margin: "8px" }}
            onClick={() => dispatch({ type: "stop" })}
          >
            Stop
          </button>
          <button
            style={{ margin: "8px" }}
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Clock;
