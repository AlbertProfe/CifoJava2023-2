import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ApiRest() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setData]);

  return (
    <>
      <h1> My data todos from axios</h1>
      {data &&
        data.map((item) => {
          return (
            <spam key={item.id}>
              id: {item.id}
              <spam>userId: {item.userId} </spam>
              <spam>title: {item.title} </spam>
              <spam>completed: {item.completed} </spam>
              <br />
            </spam>
          );
        })}
    </>
  );
}
