import React from 'react'
import BookList from './BookList';
import Gallery from './Gallery';
import TriggerAPI from './TriggerAPI';

export default function App() {
  return (
    <>
    <div>App</div>
    <br />
    <TriggerAPI />
    <Gallery />
    <BookList />
    <Gallery />
    <BookList />
   
    </>
  )
}
