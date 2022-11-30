import React from "react"

function InputArea(props) {
  return (
    <div className="form">
      <form onSubmit={props.newItem}>
        <input onChange={props.onChange} type="text" value={props.text} />
        <button type="submit">
          <span>Add</span>
        </button>
      </form>
    </div>
  )
}

export default InputArea
