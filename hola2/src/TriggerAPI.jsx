import React, { useState } from "react";
import axios from "axios";

function TriggerAPI() {
  const [responseData, setResponseData] = useState(null);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get("http://localhost:8090/api/book/books");
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Trigger button</h2>
      <button onClick={handleButtonClick}>Get Data</button>
      {responseData && (
        <div>
          <h3>Response Data:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default TriggerAPI;
