import React, { useState } from "react"
import TodoItem from "./TodoItem"

function App() {
  // Change input value
  const [inputText, setInputText] = useState("")
  const handleChange = (event) => {
    const newValue = event.target.value

    setInputText(newValue)
  }

  // Add new item
  const [items, setItems] = useState([])
  const addItem = (event) => {
    setItems((previousValue) => {
      return [...previousValue, [inputText]]
    })
    setInputText("")
    event.preventDefault()
  }

  const deleteItem = (id) =>
    setItems((previousValue) => {
      return previousValue.filter((item, index) => {
        return index !== id
      })
    })

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={addItem}>
          <input onChange={handleChange} type="text" value={inputText} />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
