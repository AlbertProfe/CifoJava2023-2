import React from 'react'
import BookList from './BookList';
import Gallery from './Gallery';
import TriggerAPI from './TriggerAPI';


export default function App() {

  return (
    <>
      <h1>Hola2, React jsx and components</h1>
      <div
        style={{
          width: "550px",
          display: "inline-block",
          verticalAlign: "top",
        }}
      >
        <Gallery />
        <BookList />
      </div>

      <div
        style={{
          width: "550px",
          display: "inline-block",
          verticalAlign: "top",
        }}
      >
        <TriggerAPI />
      </div>

     
    </>
  );
}
