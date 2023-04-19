import React from 'react'
import BookList from './BookList';
import Gallery from './Gallery';
import TriggerAPI from './TriggerAPI';

export default function App() {

  return (
    <>
      <div style={{ width: "450px", display: "inline-block" }}>
        <Gallery />
        <BookList />
      </div>
      
      <div style={{ width: "250px", display: "inline-block" }}>
        {" "}
        App
        <TriggerAPI />
      </div>
    </>
  );
}
