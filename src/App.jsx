import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Bookstore'

function App() {
  const [count, setCount] = useState(0)
  const books = [
    {id:1, name: 'Physics', price: 120},
    {id:2, name: 'Chemistry', price: 160},
    {id:3, name: 'Math', price: 220},
    {id:4, name: 'Biology', price: 180}
  ]
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah'];
  const singers = [
    {id:1, name: "Mahfuzur Rahman", age: 67},
    {id:2, name: 'Eva Rahman', age: 54},
    {id:3, name: 'Shuvro Deb', age: 42},
    {id:4, name: 'Pritom', age: 24},
  ]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BookStore books= {books}></BookStore>

      {
        singers.map(singer => <Singer singer = {singer}></Singer>)
      }

      <Actor name={"Bappa Raj"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      <Todo
        task="Learn React" isDone={true}></Todo>
      <Todo
        task="Core concepts" isDone={false}></Todo>
      <Todo
        task="Try Jsx" isDone={true}></Todo>

      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="21000"></Device>
      <Device></Device>
      <Person></Person>
      <Student grade="7" score="89"></Student>
      <Student grade={8} score= "76"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  )
}
function Device(props) {
  // console.log(props)
  return <h3>This device: {props.name} & price: {props.price}</h3>
}
function Person() {
  const age = 25;
  const money = 500;
  const person = {
    name: 'Sakib',
    age: 16
  }
  return <h3>I am {person.name} with age {age + money}</h3>
}
// const {grade, score} = {grade: '7', score: '89'};
function Student({ grade = 1, score = 0 }) {
  // console.log(grade, score)
  return (
    <div className='student'>
      <h3>I am a student.</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}
function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '10px',
    border: 'solid 2px red',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h4>Developer</h4>
      <p>Coding:</p>
    </div>
  )
}

export default App
