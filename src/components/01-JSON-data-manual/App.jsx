import React from 'react'
import Card from './components/Card'
import Data from "./data.json"
import "./App.css"
function App() {
  const cardContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  console.log(Data)
  return (
    <>
      <header>
        <div className="container">
          <h1>Todo App</h1>
        </div>
      </header>
      <Card title={Data[0].title} content={Data[0].content}/>
      <Card title={Data[1].title} content={Data[1].content}/>
      <Card title={Data[2].title} content={Data[2].content}/>
      <Card title={Data[3].title} content={Data[3].content}/>
    </>
  )
}

export default App