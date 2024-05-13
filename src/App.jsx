import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  const actors = ['Chris Evans', 'Chris Hemsworth', 'Tom Hardy', 'Tom Holland', 'Cillian Murphy'];

  const books = [
    { id: 1, name: 'Physics', price: 100 },
    { id: 2, name: 'Chemistry', price: 200 },
    { id: 3, name: 'Biology', price: 160 },
    { id: 4, name: 'Mathematics', price: 300 },
  ]

  const singers = [
    { name: 'Ed Sheeran', age: 30 },
    { name: 'The Weeknd', age: 27 },
    { name: 'Justin Bieber', age: 28 },
    { name: 'Bruno Mars', age: 32 },
    { name: 'Charlie Puth', age: 35 }
  ]
  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>
        )
      }


      <Actor name={"Robert Downey Jr."}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo
        task="Learn React"
        isDone={true}>
      </Todo>

      <Todo
        task="Explore Core Concept"
        isDone={false}>
      </Todo>

      <Todo
        task="Try JSX">
        isDone={true}
      </Todo> */}


      {/* <Device name='Desktop' Price='55000'></Device>
      <Device name='Mobile' price='17000'></Device>
      <Device name='Smart Watch' price='23000'></Device>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student grade={12} score='80'></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props);
  return <h2>This device: {props.name}</h2>
}

function Person() {
  return (
    <h3>I am a good person</h3>
  )
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className='student'>
      <h2>I am a student</h2>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>

  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerStyle}>
      <h2>Developer</h2>
      <p>Coding: </p>
    </div>
  )
}

export default App
