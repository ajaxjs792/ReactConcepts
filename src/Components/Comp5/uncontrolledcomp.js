import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) =>
  <div>
    <input type="text" />
    <span> rendered {props.count} times </span>
  </div>

let renderCount = 0
function render() {
  ReactDOM.render(
    <App count={renderCount++} />,
    document.getElementById('root')
  )
}

// Render the App component once every second.
window.setInterval(render, 1000) 

//on rerender also the input state is seen saved 

// this is what we call an uncontrolled component; it can take on different states, even while represented by 
//the same element. And this raises the question — how does this actually work? Where is the state stored? Have a think 
//about it, and then when you’re ready check your answer below.